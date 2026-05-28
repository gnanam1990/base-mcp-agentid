# AgentID Architecture

## Product Role
AgentID registers AI agents on Base, records reputation events, and exposes public and paid reputation queries for agent-to-agent commerce.

## System Shape
- Frontend app: Next.js, TypeScript, Tailwind, shadcn-style components, responsive dashboards.
- API layer: Node/TypeScript endpoints for product reads, prepare flows, analytics, and x402-gated access.
- Base layer: Base Account for user approval and Base MCP for assistant-driven actions.
- Payment layer: x402 for paid API/content/service access using USDC on Base or Base Sepolia.
- Data layer: PostgreSQL for durable product state and Redis for cache/session/rate-limit workloads.
- Contracts: Solidity/Foundry only where the module needs onchain state or settlement logic.

## Main Modules
- Agent profile registry with owner, metadata URI, capabilities, and public verification fields.
- Reputation event indexer for successful actions, disputes, and verified usage.
- Agent explorer with trust score, history, and leaderboard views.
- MCP tools for agent registration, lookup, and trust verification.
- x402-gated detailed reports for premium reputation data.

## Data Model
- Agent profiles and owner addresses.
- Capability tags, verification state, and metadata.
- Reputation events, scoring snapshots, and report purchases.
- Public leaderboard and paid detailed report logs.

## MCP And x402 Pattern
Every write action should be exposed as a prepare endpoint that returns unsigned calldata or a payment request. MCP/plugin documentation must explain onboarding, read endpoints, prepare endpoints, and the mapping into Base MCP actions.

For paid resources, endpoints should return an x402 payment requirement before serving premium data. The app must enforce a user-defined max payment cap and record receipts for analytics and support.

## Safety Defaults
- Base Sepolia first, then Base mainnet.
- No private keys in app config.
- No hidden approvals or auto-execution.
- Clear user review before paid access or onchain writes.
- Placeholder env vars only in committed files.
