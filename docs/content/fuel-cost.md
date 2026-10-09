# fuel-cost

Canonical: https://garagemath.com/fuel-cost

## How fuel cost is calculated

This tool uses **miles**, **US miles per gallon**, and **dollars per US gallon**. Imperial MPG is a different unit; do not enter it as US MPG. Distance, fuel economy and price must refer to the same unit system.

```text
fuel, US gallons = distance, miles ÷ MPG
trip cost = fuel × price per gallon
cost per mile = price per gallon ÷ MPG
annual fuel cost = annual miles ÷ MPG × price per gallon
```

Annual cost uses the annual-distance input, not an automatic extrapolation from the trip. Zero distance or price is allowed; MPG must be positive. The sensitivity table holds distance and price fixed while varying MPG by 20% below and above your entry.

## Worked example 1: a 300-mile trip

At **25 US MPG** and **$3.50 per US gallon**:

```text
fuel = 300 ÷ 25 = 12 gallons
trip cost = 12 × 3.50 = $42.00
cost per mile = 3.50 ÷ 25 = $0.14
```

For **12,000 annual miles**, the same assumptions give **480 gallons** and **$1,680 per year**. The monthly average is $140, not a promise that every calendar month has that bill.

## Worked example 2: improved MPG with a different fuel price

Compare that baseline with **30 US MPG** and **$4.00 per gallon** at the same distances:

```text
trip = 300 ÷ 30 × 4.00 = $40.00
annual = 12,000 ÷ 30 × 4.00 = $1,600
annual difference = $1,680 − $1,600 = $80
```

Higher MPG does not produce the same percentage reduction in dollars when price changes too. Here the annual saving is only $80 under the chosen assumptions, despite a 20% MPG increase.

## What the result means for your budget

The result is fuel expense, not total vehicle operating cost. Use representative MPG and compare scenarios at the same distance. A single unusually easy highway trip may not represent commuting.

The sensitivity table shows how a budget responds to assumed MPG. It does not forecast weather, congestion, idling or driving style. At fixed price, cost changes inversely with MPG; a 20% MPG increase reduces fuel cost by about 16.7%, not 20%.

## What this calculator cannot prove

It does not model maintenance, depreciation, insurance, financing, tolls or electricity. It cannot determine actual MPG or future fuel prices. Pump fills, distance readings and route conditions can introduce measurement error. Tire-size changes can affect an uncorrected odometer and therefore apparent MPG.

It also cannot tell you whether a higher-priced fuel is appropriate. Follow the vehicle’s fuel requirements. Do not select fuel grade based only on an expense comparison.

## Before using the estimate

1. Confirm US gallons and US MPG.
2. Use multiple representative fill-ups or a clearly labeled estimate.
3. Check distance readings after tire or calibration changes.
4. Compare plausible price and MPG scenarios.
5. Keep fuel savings separate from purchase and operating costs.
6. State the time horizon when evaluating a modification or vehicle change.

## Frequently asked questions

### Is this total ownership cost?

No. It calculates fuel from entered distance, MPG and price. Other costs can exceed a small fuel saving and need a separate comparison.

### Can I use Imperial MPG?

Not directly. An Imperial gallon is larger than a US gallon. Convert all relevant inputs consistently before using this US-unit calculator.

### Why does 20% better MPG save less than 20%?

You divide distance by MPG. At fixed distance and price, multiplying MPG by 1.20 divides cost by 1.20, leaving 83.33% of the original cost.

### Should I average several MPG readings?

For combined measured MPG, divide total miles by total gallons. Averaging individual MPG figures without weighting can misrepresent unequal trips or fill-ups.

### Does the annual result depend on trip distance?

No. Annual miles are a separate input. The tool applies the same MPG and price assumptions to that distance.

### Can a tire change affect measured MPG?

Yes, if distance calibration changes. Correct the distance basis before attributing a change in calculated MPG to fuel consumption. Tire diameter alone does not predict efficiency.

### Is the price a current local fuel quote?

No. It is your input. Use a current relevant price when needed and consider a range when budgeting ahead.

## Related reading

Read [Fuel Cost Decision Math](fuel-economy-guide.html) and [Speedometer & Distance Readings](speedometer-guide.html). Use [Tire Size](tire-size.html) to inspect nominal diameter changes. These examples are arithmetic scenarios, not fuel-price forecasts.
