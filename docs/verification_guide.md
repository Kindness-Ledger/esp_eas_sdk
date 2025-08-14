# Verification guide

**Updated** August 15, 2025

## Goal
Run the demo on a public test network and see three lines in the console, then place a short proof in `docs/proof`.

## Steps
```
pnpm install
cp .env.example .env   # set RPC_URL, PRIVATE_KEY, EAS_CONTRACT, SCHEMA_REGISTRY, optional SCHEMA_UID
pnpm run typecheck
pnpm demo
```

## Expected output
See `docs/expected_output.md`. The console prints Recipient, Schema UID and Attestation TX.

## Proof
Copy the console output into a text file in `docs/proof` and add links to EAS Scan for the schema and the transaction.

## Troubleshooting
If you hit a faucet rate limit, try again later. If the network is wrong, set RPC_URL to a public test network like Base Sepolia or Optimism Sepolia.
