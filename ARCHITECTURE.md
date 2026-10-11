# Architecture - GonaAI Jigawa

Problem: Manoman Jigawa basa samun shawara a Hausa, farashi na gaskiya, da QR don rance.

Workflow:
1. Farmer: "Menene hadarin damina?"
2. LangGraph Router -> Hausa NLP
3. MCP Tools:
   - get_climate_risk -> NiMet
   - get_market_prices -> Gujungu
   - create_traceability -> QR + Credit 78/100
4. External MCP: filesystem + brave-search
5. Output: Hausa + WhatsApp

Stack: MCP SDK TS, LangGraph, WhatsApp API
