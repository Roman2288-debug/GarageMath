# hp-weight

Canonical: https://garagemath.com/hp-weight

## How power-to-weight is calculated

Enter horsepower and vehicle weight in pounds using a stated measurement basis. The tool provides three forms of the same relationship:

```text
pounds per horsepower = weight lb ÷ horsepower
horsepower per US short ton = horsepower ÷ (weight lb ÷ 2,000)
horsepower per 1,000 lb = horsepower ÷ (weight lb ÷ 1,000)
```

Lower lb/hp means less entered weight per horsepower. Higher hp per ton means more entered power per unit of weight. A US short ton is 2,000 lb; it is not a metric tonne or a British long ton.

## Worked example 1: consistent vehicle comparison

Vehicle A has **400 hp and 3,600 lb**. Vehicle B has **300 hp and 2,700 lb**, on the same power and weight basis.

| Ratio | Vehicle A | Vehicle B |
|---|---:|---:|
| Pounds per hp | 9.00 | 9.00 |
| Hp per US short ton | 222.22 | 222.22 |
| Hp per 1,000 lb | 111.11 | 111.11 |

They share the ratio despite different absolute power and mass. That does not predict identical acceleration: gearing, traction, power delivery and aerodynamic load differ.

## Worked example 2: operating weight changes the comparison

Keep **400 hp**, but change 3,600 lb to **3,800 lb** after adding driver, fuel or equipment not included in the first convention:

```text
3,800 ÷ 400 = 9.50 lb/hp
400 ÷ (3,800 ÷ 2,000) = 210.53 hp per US short ton
```

The worse ratio does not mean the engine lost power. The mass basis changed. Record exactly what is included instead of comparing a light catalog weight against a loaded scale weight.

## What the result means on the car

The ratio is a screening comparison, useful for describing changes in power or mass. It normalizes the inputs; it does not normalize the entire vehicle. Peak horsepower also does not describe power available at every operating speed.

Engine-rated horsepower and chassis-dyno wheel horsepower are different bases. Do not compare them as equivalent or apply a universal drivetrain-loss percentage. The [Quarter-Mile estimator](quarter-mile.html) adds an empirical relationship, not a complete performance simulation.

## What this calculator cannot prove

It does not predict launch grip, elapsed time, braking, handling, thermal capacity, durability or operating cost. It has no torque curve, shift model or aerodynamic data. Equal ratios do not mean equally capable vehicles.

Weight removal also has practical consequences beyond the ratio. This tool cannot approve removal of structural, restraint, braking or required equipment. Treat the calculation as arithmetic rather than a modification recommendation.

## Before comparing modifications

1. State horsepower source and whether it is engine or wheel output.
2. State weight convention and what is included.
3. Compare before and after values on the same basis.
4. Distinguish measured inputs from estimates.
5. Evaluate the actual use case, traction and gearing separately.
6. Verify consequences of any proposed weight change.

## Frequently asked questions

### Why do the outputs improve in opposite directions?

Weight per horsepower decreases as the ratio improves. Horsepower per weight increases. They express the same relationship with numerator and denominator reversed.

### Is hp per ton a metric value?

Here it means a 2,000-pound US short ton. A metric tonne is a different mass. Always check the unit before comparing a published figure.

### Should I use curb weight or loaded weight?

Use the convention appropriate to the question, and keep it consistent. For comparison with a track pass, actual operating weight including driver and fuel is more relevant than a different catalog convention.

### Can I compare wheel hp with advertised engine hp?

Not directly. The measurement bases differ. A ratio cannot correct incompatible source data simply because the output has the same units.

### Do equal ratios mean equal acceleration?

No. Power delivery, tire traction, gearing, shifts and road load matter. The first example deliberately isolates that limitation.

### Is weight reduction equivalent to adding power?

It can produce the same ratio change mathematically, but the operating effects differ. Neither path automatically produces the same launch, high-speed behavior or reliability.

### Does the ratio explain handling?

No. Mass distribution, tires, suspension and other variables are outside this tool. Do not interpret a power-to-weight ranking as an overall vehicle-quality ranking.

## Related guide and assumptions

Read [Power-to-Weight Explained](power-to-weight-guide.html) and [Quarter-Mile Estimates](quarter-mile-guide.html). The formulas are direct ratios. The model adds no hidden power correction, performance rating or quality score.
