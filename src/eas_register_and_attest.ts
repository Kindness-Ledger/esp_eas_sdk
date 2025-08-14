
// src/eas_register_and_attest.ts
import "dotenv/config";
import { EAS, SchemaEncoder, SchemaRegistry } from "@ethereum-attestation-service/eas-sdk";
import { ethers } from "ethers";

const EAS_CONTRACT = process.env.EAS_CONTRACT || "0xYourEASAddressOnChosenL2";
const SCHEMA_REGISTRY = process.env.SCHEMA_REGISTRY || "0xYourSchemaRegistryAddressOnChosenL2";
const MAYBE_SCHEMA_UID = process.env.SCHEMA_UID;

export const SCHEMA = "bytes32 mediaCid,uint64 time,uint32 grid,uint8 category,address verifier,bytes32 campaign";

async function main() {
  const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);

  let schemaUid = MAYBE_SCHEMA_UID;

  if (!schemaUid) {
    console.log("No SCHEMA_UID set, registering new schema on", SCHEMA_REGISTRY);
    const registry = new SchemaRegistry(SCHEMA_REGISTRY);
    registry.connect(wallet);
    const registerTx = await registry.register({
      schema: SCHEMA,
      resolverAddress: ethers.ZeroAddress,
      revocable: true
    });
    const registerRcpt = await registerTx.wait();
    schemaUid = (registerRcpt?.logs?.[0]?.topics?.[1] as string) || undefined;
    console.log("Registered schema UID", schemaUid);
  } else {
    console.log("Using existing SCHEMA_UID", schemaUid);
  }

  if (!schemaUid) throw new Error("No schema UID available");

  const eas = new EAS(EAS_CONTRACT);
  eas.connect(wallet);

  const encoder = new SchemaEncoder(SCHEMA);
  const encoded = encoder.encodeData([
    { name: "mediaCid", value: "0x6e6f6e636964706c61636568617368deadbeefdeadbeefdeadbeefdeadbeef", type: "bytes32" },
    { name: "time", value: BigInt(Math.floor(Date.now() / 1000)), type: "uint64" },
    { name: "grid", value: 52522310, type: "uint32" },
    { name: "category", value: 1, type: "uint8" },
    { name: "verifier", value: ethers.ZeroAddress, type: "address" },
    { name: "campaign", value: ethers.ZeroHash, type: "bytes32" }
  ]);

  const tx = await eas.attest({
    schema: schemaUid,
    data: {
      recipient: wallet.address,
      expirationTime: 0n,
      revocable: true,
      refUID: ethers.ZeroHash,
      data: encoded,
      value: 0n
    }
  });
  const rcpt = await tx.wait();
  console.log("Recipient", wallet.address);
  console.log("Schema UID", schemaUid);
  console.log("Attestation TX", rcpt?.hash);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
