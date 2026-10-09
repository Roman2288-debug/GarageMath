# engine-displacement

Canonical: https://garagemath.com/engine-displacement

## How swept displacement is calculated

Bore is the finished cylinder diameter. Stroke is piston travel between dead centers. A circular cylinder’s cross-sectional area multiplied by stroke gives swept volume; cylinder count gives the total.

```text
per-cylinder volume = π ÷ 4 × bore² × stroke
total volume = per-cylinder volume × cylinder count
cubic inches × 16.387064 = cubic centimeters
cubic centimeters ÷ 1,000 = liters
```

Bore and stroke must use the same length unit. With millimeters, divide cubic millimeters by 1,000 to obtain cc. The unit selector converts existing dimensions rather than relabeling them. Count must be a positive whole number.

## Worked example 1: 86 mm square four-cylinder

Enter **86 mm bore**, **86 mm stroke**, and **four cylinders**.

```text
per cylinder = π ÷ 4 × 86² × 86 ÷ 1,000 = 499.56 cc
total = 499.56 × 4 = 1,998.23 cc ≈ 2.00 L
```

The rounded 2.00-liter display is a convenient label. The dimensions calculate to about 1,998 cc, not exactly 2,000. “Square” means equal bore and stroke, not a square-shaped cylinder.

## Worked example 2: a 0.030-inch overbore

Use **4.000-inch bore**, **3.480-inch stroke**, and **eight cylinders**. The result is **349.85 cubic inches**, or **5,732.98 cc**. Increase only bore to **4.030 inches**:

```text
new total = π ÷ 4 × 4.030² × 3.480 × 8
          = 355.12 cubic inches
increase = 355.12 − 349.85 = 5.27 cubic inches
```

That is roughly a 1.51% swept-volume increase. Bore is squared, so the change is not simply 0.030 ÷ 4.000. The calculation does not establish that the block can accept the overbore.

## What the result means on the engine

Displacement describes the volume swept by all pistons. It is useful for checking dimensions, identifying nominal engine labels and recording machining changes. It is not the total space inside an assembled engine and does not include chamber volume.

Changing bore changes swept volume and can affect compression geometry, but the final ratio also depends on chamber, piston, gasket and deck volumes. Use [Compression Ratio](compression-ratio.html) with the actual matching component data rather than treating displacement as a proxy.

## What this calculator cannot prove

It cannot establish cylinder-wall thickness, block condition, permissible machining, piston clearance, ring gaps or component compatibility. It does not predict horsepower, torque, fuel requirements or durability. More displacement does not establish proportional power.

It assumes all cylinders share the entered dimensions. Machined parts may vary and measurements may require appropriate precision. Catalog bore, finished bore and wear measurements are different records; do not quietly substitute one for another.

## Before machining or ordering parts

1. Identify the engine and dimensions from reliable records.
2. Obtain finished measurements from the machinist when relevant.
3. Confirm units and whether overbore is a diameter increase.
4. Verify the block and matching piston requirements separately.
5. Update the per-cylinder compression-volume sheet after dimensional changes.
6. Retain the measurement record with the build specification.

## Frequently asked questions

### Is chamber volume part of displacement?

No. Displacement is swept volume. Chamber and other remaining volumes belong to the compression budget. Adding them would answer a different question.

### Does 0.030 over mean adding 0.060 to bore?

In ordinary engine specifications, a 0.030-inch overbore describes the diameter increase. Confirm the machinist’s specification; do not add it to both sides again.

### Why is the bore squared?

Cylinder area scales with diameter squared. Stroke then supplies length. This makes bore and stroke changes affect volume differently when expressed as absolute dimensional changes.

### Does switching units alter the result?

It should preserve physical dimensions, apart from small display rounding. An 86 mm bore is approximately 3.385827 inches. Merely changing a label without conversion would be incorrect.

### Why does an engine name differ from the result?

Common names round displacement. The calculator uses entered dimensions. Compare finished measurements before treating a small difference from the marketing label as an error.

### Does a larger bore guarantee more power?

No. Breathing, combustion, calibration and operating conditions matter. The tool has no power model. The example’s volume gain is not a horsepower claim.

### Can I determine a safe overbore here?

No. That requires the actual block’s condition and appropriate inspection. Arithmetic does not establish remaining wall thickness or machining suitability.

## Related guide and assumptions

Read [Engine Volume & Overbore](engine-volume-guide.html) and the [Compression Guide](compression-ratio-guide.html). The model is circular-cylinder geometry using exact stated conversions; all numerical examples are original and checked against the shared math module.
