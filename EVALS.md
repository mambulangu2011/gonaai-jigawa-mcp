# EVALS - GonaAI Jigawa

Tested with 3 farmers in Jigawa.

## Test 1: Climate Risk
Input: get_climate_risk("Birnin Kudu")
Expected: risk high in July
Result: ✅ 85% risk + Hausa advice "Yi shiri don maganin kwari"

## Test 2: Market Prices
Input: get_market_prices("rice")
Expected: Gujungu price
Result: ✅ ₦68k/bag + advice to sell in Kano for +12k

## Test 3: Traceability
Input: create_traceability("JG-BK-001")
Expected: QR + credit score
Result: ✅ QR: qrfarm.ng/JG-BK-001 + Credit 78/100

Success Rate: 3/3 = 100%
Lang: Hausa + English supported
