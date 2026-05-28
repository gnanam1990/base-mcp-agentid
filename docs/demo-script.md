# AgentID Demo Script

## Goal
Show a complete Base-themed agent loop: create a record, quote the x402 price, block unpaid access, unlock the paid trust report, and record the receipt.

## Flow
1. Open the dashboard.
2. Show live metrics and the current Base Account approval surface.
3. Create a demo agent with `POST /api/agentid/agents`.
4. Fetch the paid quote with `GET /api/agentid/agents/:slug/quote`.
5. Attempt `POST /api/agentid/agents/:slug/run` without payment and show the `402 Payment Required` body.
6. Retry with `x-demo-payment: accepted`, show result payload, receipt, and `payment-response`.
7. Call `POST /api/mcp/agentid` with the quote tool to prove agents can resolve the same payment metadata.
8. Refresh the dashboard and show metrics movement.

## Next Proof
Add signed reputation events, Base attestations, and production trust report settlement.
