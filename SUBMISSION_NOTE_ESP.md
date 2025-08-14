# ESP Small Grants submission note

**Project name**  
Kindness Ledger EAS schema and SDK

**One sentence summary**  
Kindness Ledger gives acts of kindness a memory and a pulse through an open EAS schema, a small SDK, and a public index that anyone can reuse.

**Vision with Inspiration to act**  
A global stream of kindness that people can see, trust, and join. Each act invites the next one. Inspiration to act is a gentle invitation. People see an act and feel encouraged to do something similar in their own way and at their own pace. Acts keep a durable memory, appear on a real time map, and flow into a curated AI feed that makes hope visible.

**Problem and opportunity**  
Daily feeds reward anger and fear while helpful acts fade away. Communities and schools need a neutral way to record those acts and build on them. A shared open schema on Ethereum turns kindness into portable and auditable signals that any app can reuse.

**Proposed solution**  
Define a minimal EAS schema with media CID, time, coarse location cell, category, optional verifier, and optional campaign id. Publish a TypeScript SDK and example contracts. Ship a tiny demo and a light index that power a real time map and a curated AI feed. Media lives in IPFS and Filecoin. Only compact pointers are on chain. Users never pay fees.

**Impact and ecosystem value**  
Developers add verifiable kindness in hours, not weeks. Inspiration to act encourages natural participation and creates visible momentum without pressure. The open schema becomes a common language for civic apps and education programs. Partners can sponsor challenges and compute a public Kindness Score from open signals. Partner features stay out of the scope of this grant.


**Budget and payments**  
Total 24,000 USD  
Development and documentation 18,000  
Light security review 1,000  
Community testing 1,500  
Infrastructure 1,000  
Contingency 2,500  
Milestone based disbursement requested

**Openness and license**  
MIT. Spec in a public repo with versioned releases. All outputs are public and free to use.

**Team**  
Senior Software Engineer in Berlin. I have spent many years in commercial software across startups, agencies and enterprise. Alongside that I have occasionally done collaborative art projects. I am now exploring Ethereum and content addressed storage to give my work more purpose. With this grant I will ship an open schema, a small SDK and a reproducible demo that others can adopt.

I want to use Ethereum to experiment in public and give my work more purpose. This grant helps me turn hard won engineering practice into small open tools that others can reuse.


**Tone and care**  
We avoid pressure and performance. People can contribute privately, with pseudonyms, or in public. Consent and dignity come first, and the feed favors care and usefulness over spectacle.

**Risks and mitigation**  
Scope creep. Keep the schema minimal and extend with optional fields. Adoption risk. Engage early with civic builders, publish copy ready examples, and run small school and community pilots.

**Links**  
[Repo EAS schema and SDK](https://github.com/kindness-ledger/esp_eas_sdk)  
[Repo media pipeline for IPFS and Filecoin](https://github.com/kindness-ledger/filecoin_media_pipeline)

**Non double funding statement**  
This request covers only the open EAS schema, SDK, demo, and docs. No identical work is funded elsewhere. Media stays off chain and is referenced by CID. Filecoin replication will be explored later and is not part of this grant.

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


**Non double funding and activation**  
We request this grant for distinct work that does not overlap with any other funding. All paid outputs will be created after activation and will be documented with public proofs.


**Sustainability note**  
This grant funds open developer work only. Sponsorship related features are out of scope for ESP. Any future sponsorships will not change that end users never pay fees.
