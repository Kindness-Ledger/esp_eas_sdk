# Milestones and payments for ESP EAS SDK

## Payment terms
Work is paid after activation only. We will not claim payment for work done before activation. Payments are made after acceptance of each milestone deliverable.

## M1 after activation  4,000 USD
**Goal**  end to end proof on a public test network from schema to attestation with a short how to

**Deliverables**
- Minimal attestation schema string in the repo
- `eas_register_and_attest.ts` that reads optional `SCHEMA_UID` from `.env`
- `.env.example` with `RPC_URL`, `PRIVATE_KEY`, `EAS_CONTRACT`, `SCHEMA_REGISTRY`, optional `SCHEMA_UID`
- A fresh run after activation that produces a new Schema UID and a new attestation transaction
- `docs/expected_output.md` and a short verification guide
- Tagged release `v0.1.0` with output logs and links to EAS Scan

**Acceptance**
- README steps run as written on a common laptop
- Console shows `Recipient`, `Schema UID`, `Attestation TX`
- Release tag contains logs and links

**Reviewer steps**
```
pnpm install
cp .env.example .env   # set values
pnpm demo
```

## M2 SDK and light read path  8,000 USD
**Goal**  a small SDK function to create attestations and a read path that prints structured fields

**Deliverables**
- SDK function that creates an attestation for the defined schema
- Simple read script or light index that lists recent attestations for an address
- `pnpm run typecheck` green
- Short how to with expected output

**Acceptance**
- Demo creates a live attestation on a public test network
- Read path prints structured fields for at least one attestation

## M3 docs and examples  6,000 USD
**Goal**  clear docs and copy ready examples for developers

**Deliverables**
- README sections for schema, write and read with copy paste code
- Two examples that cover common use cases
- Public endpoint or instructions to query a tiny index

**Acceptance**
- A new developer can follow the README and run both examples

## M4 hand off and polish  6,000 USD
**Goal**  stability and easy adoption

**Deliverables**
- Final documentation pass
- Small safety note about abuse vectors and rate limits for the index
- `v0.2.0` tag and a short changelog

**Acceptance**
- Docs reviewed and examples verified
