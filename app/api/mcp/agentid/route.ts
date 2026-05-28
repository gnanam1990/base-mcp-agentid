import { NextResponse } from "next/server";
import projectData from "@/lib/project-data.json";
import { findItem, listItems, projectStats } from "@/lib/mvp-store";

const tools = [
  ...projectData.tools,
  "list_agents",
  "get_agent_quote",
  "prepare_agent_run",
  "get_agentid_stats",
];

export function GET() {
  return NextResponse.json({
    server: "agentid-mcp",
    version: "0.1.0",
    tools,
  });
}

export async function POST(request: Request) {
  const body = (await request.json()) as {
    tool?: string;
    arguments?: {
      query?: string;
      slug?: string;
    };
  };

  if (projectData.tools.includes(body.tool || "") || body.tool === "list_agents") {
    const query = body.arguments?.query?.toLowerCase() ?? "";
    const results = listItems().filter((item) =>
      [item.name, item.descriptor, item.detail].some((value) => value.toLowerCase().includes(query)),
    );
    return NextResponse.json({ data: results });
  }

  switch (body.tool) {
    case "get_agent_quote": {
      const item = body.arguments?.slug ? findItem(body.arguments.slug) : undefined;
      if (!item) {
        return NextResponse.json({ error: "agent_not_found" }, { status: 404 });
      }
      return NextResponse.json({
        data: {
          slug: item.slug,
          priceUsdc: item.priceUsdc,
          resource: `/api/agentid/agents/${item.slug}/run`,
          network: process.env.AGENTID_X402_NETWORK || "eip155:84532",
        },
      });
    }
    case "prepare_agent_run": {
      const item = body.arguments?.slug ? findItem(body.arguments.slug) : undefined;
      if (!item) {
        return NextResponse.json({ error: "agent_not_found" }, { status: 404 });
      }
      return NextResponse.json({
        data: {
          method: "POST",
          resource: `/api/agentid/agents/${item.slug}/run`,
          maxPayment: `${item.priceUsdc.toFixed(3)} USDC`,
        },
      });
    }
    case "get_agentid_stats":
      return NextResponse.json({ data: projectStats() });
    default:
      return NextResponse.json({ error: "unknown_tool" }, { status: 400 });
  }
}
