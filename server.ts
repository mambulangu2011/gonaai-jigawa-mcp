import { McpServer } from "@modelcontextprotocol/sdk";
const server = new McpServer({ name: "gonaai-jigawa", version: "1.0" });
server.tool("get_climate_risk", "Get rainfall and pest risk", { lga: { type: "string" } }, async ({ lga }) => {
  return { content: [{ type: "text", text: `Risk for ${lga}: Low rain, High pest. Action: Spray early. Source: NiMet` }] };
});
server.tool("get_market_prices", "Get market prices", { crop: { type: "string" } }, async ({ crop }) => {
  return { content: [{ type: "text", text: `${crop}: Gujungu N45k, Dawanau N48k. Advice: Hold 3 days. Source: Market` }] };
});
server.tool("create_traceability", "Create QR traceability", { farmerId: { type: "string" } }, async ({ farmerId }) => {
  return { content: [{ type: "text", text: `QR: GONA-${farmerId}-2026. Credit Score: 78/100` }] };
});
server.listen();
