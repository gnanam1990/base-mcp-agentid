# AgentID

Onchain identity and trust scoring for AI agents on Base.

**Status:** Explorer MVP foundation

Register agent identities, display trust signals, and expose paid reputation reports for agent-to-agent commerce.

## Current MVP
- Base industrial-neon UI theme from the shared suite prompt.
- Responsive dashboard with wallet/action controls, live agent metrics, workflow, MCP tools, and record surface.
- File-backed agent registry with creation, x402 quote lookup, paid trust report execution, and receipt recording.
- Demo x402 flow that returns `402 Payment Required` until a payment header or demo payment approval is provided.
- Product status API at `/api/agentid/status`.
- MCP-compatible JSON endpoint at `/api/mcp/agentid`.
- Smoke checks for creation, listing, quote, unpaid lock, paid unlock, receipt, and MCP quote.

## API Surface
- `GET /api/agentid/agents` lists active agents.
- `POST /api/agentid/agents` creates a agent.
- `GET /api/agentid/agents/:slug/quote` returns the x402 payment requirement.
- `POST /api/agentid/agents/:slug/run` executes the paid trust report after payment verification and records a receipt.
- `GET /api/agentid/status` returns dashboard data and stats.
- `GET /api/mcp/agentid` lists MCP tools.
- `POST /api/mcp/agentid` runs MVP tools for discovery, quote preparation, and stats.

## Local Development
```bash
npm install
npm run dev -- -p 3003
```

Open `http://127.0.0.1:3003`.

Local data is written to `.data/agentid-db.json`. Override it with `AGENTID_DATA_FILE` for isolated runs.

## Environment
Copy `.env.example` to `.env.local` when you need custom payment behavior.

- `AGENTID_PAYMENT_MODE=demo` accepts the `x-demo-payment: accepted` header for local demos.
- `AGENTID_PAYMENT_MODE=strict` requires a real `x-payment` header and facilitator configuration.
- `X402_FACILITATOR_URL` points to a facilitator that can verify and settle x402 payments.
- `X402_RECEIVING_ADDRESS` sets the payout address for paid runs.

## Checks
```bash
npm run typecheck
npm run build
npm run test:smoke
```

## Next Build Slice
Add signed reputation events, Base attestations, and production trust report settlement.

## License
MIT
