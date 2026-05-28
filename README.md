# AgentID

onchain identity and reputation for AI agents.

**Status:** Planned fourth build after paid data primitives.

AgentID registers AI agents on Base, records reputation events, and exposes public and paid reputation queries for agent-to-agent commerce.

## Why It Exists
Base MCP gives AI assistants access to Base Account actions such as balances, sends, swaps, contract calls, and x402 payments, with user approval for writes. This project turns that capability into a focused product for AI-agent operators, protocols, marketplaces, and users who need trust signals before letting agents transact.

## Core Capabilities
- Agent profile registry with owner, metadata URI, capabilities, and public verification fields.
- Reputation event indexer for successful actions, disputes, and verified usage.
- Agent explorer with trust score, history, and leaderboard views.
- MCP tools for agent registration, lookup, and trust verification.
- x402-gated detailed reports for premium reputation data.

## Roadmap Snapshot
1. Design registry contract and reputation event model.
2. Build explorer UI and read-only reputation scoring.
3. Add registration prepare endpoint and MCP plugin mapping to send_calls.
4. Gate detailed reports with x402.
5. Launch public profiles, leaderboard, docs, and sample registered agents.

## Repository Status
This repository is public from day one. It starts with product, architecture, roadmap, and demo documentation. Implementation commits should stay small and use conventional commit prefixes.

## License
MIT
