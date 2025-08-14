# Kindness Ledger ESP EAS SDK

## Purpose
This repository holds the open attestation schema and a small SDK and demo that turn acts of kindness into portable signals on Ethereum. Each act can be attested with a compact on chain record while media lives in IPFS and Filecoin. The goal is clarity and easy reuse.

## What is here
* Minimal attestation schema string for an act
* Demo script that can register a schema and create a live attestation on a public test network
* Environment template with all variables
* Docs with expected output and a place for proof files
* Milestones and payment terms for the grant

## Quick start
Copy `.env.example` to `.env` and fill `RPC_URL`, `PRIVATE_KEY`, `EAS_CONTRACT`, `SCHEMA_REGISTRY`. You can also add `SCHEMA_UID` to skip registration and use an existing schema.

Choose a public test network such as Base Sepolia or Optimism Sepolia. Use a public faucet to get small test funds.

```
pnpm install
pnpm run typecheck
pnpm demo
```

The console should print three lines: Recipient, Schema UID, Attestation TX. See `docs/expected_output.md` for a sample. Place your own output or screenshots in `docs/proof` when a milestone is accepted.

## Read path
A light read path or tiny index will list recent attestations for an address. This is part of the next milestone.

## Project links
See `MILESTONES.md` for milestones and payments, and `STATUS.md` for the current state.

## Funding
This repository is the scope for an application to Ethereum Foundation ESP Small Grants. Media stays off chain and is referenced by CID. Filecoin replication will be explored later and is not part of this grant.

## License
MIT