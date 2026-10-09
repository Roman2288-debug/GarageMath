# Engine Displacement & Overbore: Keep a Volume Sheet

Canonical: https://garagemath.com/engine-volume-guide

Separate swept displacement from clearance volume and document finished dimensions before evaluating machining changes.

## Decide which volume you need

An engine contains several volumes that answer different questions. Swept volume is the space displaced as a piston travels from top to bottom dead center. Clearance volume is the remaining space above the piston at top dead center. Total engine displacement adds swept volumes across cylinders. Static compression ratio uses one cylinder’s swept and clearance volumes together.

Start by naming the decision. Checking a rounded engine label requires bore, stroke and cylinder count. Evaluating an overbore needs finished dimensions and separate evidence that machining is suitable. Comparing static compression also requires chamber, piston, gasket and deck data. A single “engine volume” entry without that context is too ambiguous to audit.

## Build the swept-volume calculation

For a circular cylinder, area is π times radius squared. Using diameter B instead of radius gives πB²/4. Multiply by stroke S and number of cylinders N.

```text
swept volume per cylinder = π ÷ 4 × B² × S
total displacement = swept volume × N
cubic inches × 16.387064 = cc
cubic millimeters ÷ 1,000 = cc
cc ÷ 1,000 = liters
```

Bore and stroke must use the same units. A length conversion is not a volume conversion: converting inches to millimeters scales each dimension, so the resulting volume changes by the cube of the length factor. The [Displacement calculator](engine-displacement.html) handles those conversions explicitly.

## Example 1: an 86 mm square four-cylinder

With bore and stroke both 86 mm, per-cylinder volume is π/4 × 86² × 86 ÷ 1,000 = 499.56 cc. Four cylinders total 1,998.23 cc. The familiar 2.0-liter description is a rounded label, not an exact 2,000 cc measurement.

Switching the calculator to inches preserves dimensions: 86 mm is approximately 3.385827 inches. The displacement should remain the same within conversion and display rounding. If a unit change produces a dramatically different result, check whether the values were converted or merely relabeled. Preserve original measurement precision in the build record instead of working repeatedly from rounded displays.

## Example 2: increase bore by 0.030 inch

An eight-cylinder with 4.000-inch bore and 3.480-inch stroke calculates to 349.85 cubic inches, or 5,732.98 cc. Increasing bore to 4.030 inches while holding stroke and count fixed gives 355.12 cubic inches, or 5,819.29 cc.

```text
displacement gain = 355.1152 − 349.8478 = 5.2674 cubic inches
relative gain = (4.030² ÷ 4.000² − 1) × 100 ≈ 1.51%
```

The 0.030 figure is a diameter increase in this example. Adding it twice would misrepresent the finished bore. The geometry shows the volume change; it does not establish wall thickness, suitable piston clearance, or whether this particular block should be machined.

## Why bore and stroke changes are different

At fixed stroke and count, displacement scales with bore squared. At fixed bore and count, it scales directly with stroke. A 1% bore increase therefore produces about a 2.01% displacement increase; a 1% stroke increase produces 1%. Those relationships describe geometry, not equivalent mechanical changes.

A stroke change can require a different rotating assembly and different clearance assessment. An overbore changes finished cylinder dimensions and piston requirements. Equal displacement does not establish equivalent rod geometry, breathing, combustion or durability. Keep the scope of the arithmetic separate from the mechanical project it may accompany.

## Add a separate clearance-volume sheet

For compression work, record one cylinder’s chamber volume, net piston contribution, gasket volume and deck contribution. Do not put total engine displacement into a one-cylinder ratio calculation. Do not add chamber volume to the displacement figure and call the sum engine size.

In GarageMath’s [Compression Ratio tool](compression-ratio.html), piston dish or valve-relief contribution is positive and dome contribution is negative. The current interface models a piston reference plane at or below the deck. An above-deck configuration needs an appropriate supported method rather than a disguised input.

## Example 3: same displacement, different clearance

The 4.000 × 3.480-inch cylinder sweeps 716.62 cc. With 64 cc chamber, +5 cc dish, 4.100-inch gasket bore, 0.041-inch compressed gasket and 0.020-inch below-deck clearance, total clearance is 81.99 cc and ratio is 9.74:1.

Changing chamber volume alone to 72 cc raises clearance to 89.99 cc and lowers ratio to 8.96:1. Swept displacement stays the same. This example is useful because it prevents a common inference: an unchanged engine-size label does not mean unchanged compression geometry.

## Common mistakes

- Mixing millimeters and inches in one cylinder-volume equation.
- Treating a diameter as a radius and multiplying the area incorrectly.
- Using nominal catalog dimensions instead of finished measurements.
- Entering total displacement where per-cylinder swept volume is required.
- Treating an overbore volume increase as a matching horsepower increase.
- Assuming a quoted piston volume uses GarageMath’s sign convention.

Do not average away a cylinder-specific issue without understanding it. The calculator assumes identical cylinders; an engine’s actual measurements may vary. A build sheet should retain individual measurements where the decision depends on them, rather than reporting only a total that hides the variation.

## What the calculator still cannot see

It cannot inspect wall thickness, cracks, taper, out-of-round, surface condition, piston suitability, valve clearance or machining quality. It also cannot predict airflow or output. The bore dimension belongs to the mathematical model; evidence supporting that finished dimension belongs to inspection and the machining plan.

A positive number and a plausible engine label are not proof of a viable build. Have dimensional and mechanical requirements established by the relevant manufacturer documentation and qualified builder. Record measurement methods and uncertainty when tolerances matter.

## Measurement and decision checklist

Identify the engine and the question. Record nominal dimensions with their source. Obtain finished bore and actual stroke when planning parts or machining. State units and cylinder count. Calculate swept volume, then record chamber and other clearance contributions in a separate section.

Before purchasing, confirm the block and rotating assembly requirements independently. After any change in bore, stroke, piston, head, gasket or deck, update the corresponding volume entry and recompute rather than carrying forward an old ratio. Keep original measurements so another person can reconstruct the result.

## Related reading and sources

Use [Displacement](engine-displacement.html), [Compression Ratio](compression-ratio.html), and the [Static Compression Guide](compression-ratio-guide.html). [JE Pistons’ compression calculator](https://www.jepistons.com/compression-calculator/) identifies relevant component inputs; [NIST length units](https://www.nist.gov/pml/owm/si-units-length) supports the exact inch conversion. All examples here are original geometry calculations, not machining limits or manufacturer-approved combinations.
