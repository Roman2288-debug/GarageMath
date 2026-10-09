# Tire Size Explained: Dimensions, Speed & Fitment

Canonical: https://garagemath.com/tire-size-guide

Use tire-size math to screen a change, then separate nominal geometry from product specifications and physical fitment.

## The decision: what changes with a different size?

A tire size comparison should answer several separate questions. Does the tire become taller? How much does nominal radius change? What happens to the relationship between wheel revolutions and distance? Does the proposed width introduce a new clearance question? None of these alone establishes an approved replacement.

Begin with the vehicle’s requirements and the tires actually installed. If those differ, record both. The [Tire Size calculator](tire-size.html) compares the codes you enter; it cannot tell whether the current arrangement is a suitable baseline. An existing calibration or fitment problem remains relevant even if the new size is close to it.

## Decode the metric code

In 225/45R17, 225 is nominal section width in millimeters, 45 is sidewall height as a percentage of that width, R identifies radial construction and 17 is wheel bead-seat diameter in inches. Section width is not tread width. The code mixes units, so a calculation must convert them explicitly.

```text
sidewall, mm = width × aspect ratio ÷ 100
diameter, mm = wheel inches × 25.4 + 2 × sidewall
diameter, inches = wheel inches + 2 × sidewall ÷ 25.4
```

For 225/45R17, sidewall is 101.25 mm and nominal diameter is 634.30 mm, or 24.97244 inches. The 45 does not mean a 45 mm sidewall. Changing width while retaining aspect ratio changes sidewall height too.

## Inch-format tires are a different convention

A 33x12.50R17 designation supplies nominal diameter and width in inches, plus a 17-inch wheel. Nominal sidewall height is (33 − 17) ÷ 2 = 8 inches. A product sold as a 33 can have a different published overall diameter.

The calculator uses the designation’s nominal dimensions. Record exact manufacturer dimensions separately rather than expecting the parser to act as a tire database. A P or LT designation also carries application context not captured by a diameter formula. Similar dimensions do not establish interchangeable load or inflation requirements.

## Example 1: a larger wheel, slightly less sidewall

Compare 225/45R17 with 245/40R18. The new calculated sidewall is 98 mm, versus 101.25 mm previously. Overall nominal diameter is nevertheless 653.20 mm because the wheel grew one inch.

| Dimension | Current | Proposed |
|---|---:|---:|
| Sidewall | 101.25 mm | 98.00 mm |
| Nominal diameter | 634.30 mm | 653.20 mm |
| Geometric circumference | 78.45 in | 80.79 in |

Diameter rises 2.98%; nominal radius rises 9.45 mm. At 60 mph indicated, the unchanged-calibration estimate is 61.79 mph. The proposed nominal width is 20 mm greater, which needs separate mounted-width and clearance investigation.

## Example 2: nominal versus exact product information

A 265/70R17 calculates to 31.6063 inches. Comparing to a nominal 33-inch tire gives a 4.41% increase and a 0.70-inch nominal axle-height increase. At 65 indicated, the geometric speed estimate is 67.87 mph.

Suppose the proposed exact model’s published diameter is 32.6 inches, a hypothetical value. Comparing it with the current nominal diameter gives 3.14% and 67.04 mph instead. That mixed comparison illustrates sensitivity. Prefer published diameters for both exact products for a dimensional comparison, while remembering that unloaded diameter still does not establish measured rolling circumference.

## Circumference and distance are related but not identical records

Geometric circumference equals π times diameter. Because π cancels, the nominal circumference ratio equals the nominal diameter ratio. This supports the calculator’s speed comparison. A tire operating under load deforms, so manufacturer rolling-revolution data may not match simple ideal-circle arithmetic.

If the current size matched calibration and that calibration is unchanged, the first example’s ratio is 1.0298. A displayed 100 miles then corresponds to roughly 102.98 geometric miles. This is an estimate under those assumptions, not a correction certified for the vehicle. The [Speedometer Guide](speedometer-guide.html) develops the distance and MPG implications.

## Tire diameter also changes gearing

At a fixed actual speed, selected gear and final drive, a taller tire requires fewer wheel revolutions and less engine RPM. With negligible slip, new RPM equals old RPM times old diameter divided by new diameter. This relationship does not guarantee better fuel economy or suitable engine load.

Use [RPM & Speed](rpm-speed.html) for a controlled comparison and keep actual versus indicated speed straight. A transmission may change gear or converter behavior under different conditions. Comparing dashboard readings alone after a tire change can confound the physical speed and gear relationships you intended to study.

## Common mistakes

The most common dimensional mistake is treating aspect ratio as millimeters. Another is checking wheel diameter alone. Both ignore how width and sidewall proportion contribute to the complete tire.

Other mistakes include assuming identical size codes have identical product dimensions, treating more width as proof of more grip, and using a generic diameter percentage as a universal fitment rule. Tire performance depends on more than dimensions. AWD matching and vehicle calibration have their own requirements; a favorable percentage does not override them.

## What the calculator still cannot see

It cannot measure tread width, shoulder shape, inflation/load effects or the exact mounted section width. It does not evaluate load capability, wheel rating, approved rim range, brake shape, steering movement or suspension travel. It cannot predict grip, comfort, fuel consumption or acceleration.

Nominal radius change is also not a complete ground-clearance measurement. Different components and loading conditions can produce different outcomes. Treat the arithmetic as screening evidence and verify the actual decision with product specifications and physical assessment.

## A practical measurement workflow

Record vehicle requirements, installed tire and wheel markings, and relevant modifications. Compare nominal dimensions. Obtain exact proposed tire data, including measuring rim, approved rim range and ratings. Compare wheel width and offset through the [Setup Planner](wheel-tire-setup.html).

Have dynamic body, suspension and brake compatibility assessed using appropriate methods. Follow vehicle-specific tire-matching requirements. After installation, confirm operating pressures and calibration where relevant. Keep the original assumptions and measurements alongside the comparison rather than saving only a percentage.

## Read a result in three layers

First identify the arithmetic: which sizes and units produced the dimension? Next identify the assumption: nominal code geometry, published product dimension or measured operating data? Finally identify the decision that remains: wheel compatibility, moving clearance, tire matching or calibration. A useful result record preserves all three layers.

For example, a 2.98% nominal diameter increase answers the first layer clearly. It does not answer whether the exact mounted tire clears a liner or satisfies an AWD requirement. State that unresolved question next to the result instead of putting every limitation in a distant disclaimer. This is how a calculator can remain concise at the controls while the guide supports deeper decisions without turning the output into approval.

## Related guides and sources

Read [Buying Workflow](wheel-tire-buying-guide.html), [Measuring Clearances](clearance-guide.html), [Manufacturer Specifications](manufacturer-specs-guide.html), and [AWD Matching](awd-tire-guide.html). [Michelin tire markings](https://www.michelinman.com/auto/auto-tips-and-advice/tires-101/tire-markings-explained) supports terminology; exact product and vehicle documents govern suitability. Examples are original and use 25.4 mm per inch. No size, tolerance or manufacturer approval is implied.
