# compression-ratio

Canonical: https://garagemath.com/compression-ratio

## How static compression ratio is calculated

Static compression ratio compares the volume above one piston at bottom dead center with that at top dead center. All component volumes are **per cylinder**, not totals for the engine.

```text
swept volume, cc = π ÷ 4 × bore² × stroke × 16.387064
clearance volume = chamber + piston contribution + gasket + deck
static ratio = (swept + clearance) ÷ clearance
```

Bore, stroke, gasket bore, compressed gasket thickness and deck clearance are entered in inches. Chamber and piston contributions are cubic centimeters. One cubic inch equals 16.387064 cc.

A dish or net valve-relief volume **adds** clearance and is positive here. A dome **removes** clearance and is negative. Check the supplier’s sign convention before entering it. This interface models zero or positive deck clearance, meaning the piston reference plane is at or below the block deck. It does not support a piston protruding above the deck; do not hide protrusion inside an unrelated field.

Gasket volume uses gasket bore rather than cylinder bore. Deck volume uses cylinder bore and the entered below-deck distance. Both are modeled as circular cylinders; actual shapes can require measured volumes.

## Worked example 1: a complete volume budget

Use bore **4.000 in**, stroke **3.480 in**, chamber **64 cc**, dish **+5 cc**, gasket bore **4.100 in**, compressed thickness **0.041 in**, and deck clearance **0.020 in**.

| Contribution | Volume per cylinder |
|---|---:|
| Swept volume | 716.62 cc |
| Chamber | 64.00 cc |
| Piston dish | +5.00 cc |
| Gasket | 8.87 cc |
| Below-deck volume | 4.12 cc |
| Total clearance | 81.99 cc |

```text
ratio = (716.6222 + 81.9889) ÷ 81.9889
      ≈ 9.74:1
```

Using chamber volume alone as clearance would omit 17.99 cc. The missing volume would materially change the ratio even though the bore and stroke were entered correctly.

## Worked example 2: change only chamber volume

Keep every dimension above but use **72 cc chambers**. Clearance becomes **89.99 cc** and the ratio becomes **8.96:1**. The eight additional cc lower the ratio without changing swept displacement.

This is a controlled comparison, not a cylinder-head recommendation. Chamber shape, ports, valve position and mechanical clearances have not been evaluated. A matching ratio does not make two engines equivalent.

## What the result means on the engine

The result describes static volume geometry. A compression-gauge reading measures pressure under particular cranking conditions, not this dimensionless ratio. Valve timing, sealing and testing conditions influence that reading.

Static ratio also cannot select fuel octane by itself. Combustion chamber design, timing, temperature, load, boost, mixture and engine controls influence knock behavior. The [Compression Guide](compression-ratio-guide.html) explains why there is no universal ratio-to-fuel table on GarageMath.

## What this calculator cannot prove

It does not model dynamic compression, cylinder pressure, knock, quench geometry, piston-to-valve clearance or power. It does not include a separate ring-land crevice-volume field. Catalog values may not describe machined parts. Dome shape may invalidate a simple volume budget if actual assembled geometry is not understood.

A positive clearance sum makes the arithmetic possible; it does not establish mechanical compatibility. A zero or negative sum is rejected. The current interface also rejects negative deck clearance rather than implying unsupported protrusion handling.

## Before you select parts

1. Obtain finished bore and actual stroke dimensions.
2. Record measured chambers and the piston volume convention.
3. Use compressed gasket thickness and actual gasket bore.
4. Record deck measurements and the reference plane.
5. Have all mechanical clearances and component compatibility verified.
6. Discuss fuel, operating conditions and calibration with the builder or tuner.

## Frequently asked questions

### Do I enter total chamber volume for all cylinders?

No. This is a one-cylinder calculation. Enter one chamber and its corresponding piston, gasket and deck contributions. Cylinder-to-cylinder variation should be recorded separately.

### Why is a dome negative?

It occupies space that would otherwise be clearance volume. Our convention subtracts that volume. A supplier may print the opposite sign, so interpret its definition rather than copying a number blindly.

### Does a flat-top piston mean zero cc?

Not necessarily. Valve reliefs can add clearance volume. Use the net specified or measured crown contribution for the actual piston.

### Can I enter gasket package thickness?

Use the manufacturer’s compressed thickness for the application. Uncompressed package thickness can produce a different volume. Record the exact gasket part and bore too.

### Is static ratio the same as a compression test?

No. One is a geometric ratio; the other is pressure measured while cranking. A pressure reading cannot be converted directly into static ratio by this tool.

### Does 9.74:1 prove a fuel grade is suitable?

No. The example establishes only geometry. Operating conditions and combustion behavior require engine-specific assessment. This calculator does not issue an octane recommendation.

### What if the piston is above the deck?

The current tool does not model negative deck clearance. Use an appropriate measured-volume method or a tool explicitly supporting that configuration. Do not mislabel the volume to bypass validation.

## Related tools and sources

Use [Engine Displacement](engine-displacement.html) for total swept volume and [Engine Volume Sheet](engine-volume-guide.html) to organize measurements. [JE Pistons’ compression calculator](https://www.jepistons.com/compression-calculator/) is a manufacturer reference for the component inputs. The examples are GarageMath’s own calculations; see [Methodology](methodology.html).
