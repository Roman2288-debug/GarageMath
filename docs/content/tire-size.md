# tire-size

Canonical: https://garagemath.com/tire-size

## How the tire-size math works

In **225/45R17**, 225 is nominal section width in millimeters, 45 is sidewall height as a percentage of width, R identifies radial construction, and 17 is wheel bead-seat diameter in inches. Section width is not tread width. Published section width is measured on a specified rim; mounting width can change that measurement.

```text
sidewall, mm = width × aspect ratio ÷ 100
nominal diameter, mm = rim inches × 25.4 + 2 × sidewall
nominal diameter, inches = rim inches + 2 × sidewall ÷ 25.4
```

The international inch is exactly 25.4 mm. Calculations use full precision before display rounding. In 225/45R17, sidewall height is 101.25 mm and nominal diameter is 634.30 mm, or 24.97 inches. These values come from the size code, not measurement of a particular product.

### Inch-format inputs

**33x12.50R17** supplies nominal overall diameter, section width and wheel diameter in inches. The nominal sidewall is (33 − 17) ÷ 2 = 8 inches. The model uses the stated 33-inch diameter; an actual tire sold as a “33” need not measure exactly 33.00 inches.

### Circumference, speed and height

```text
geometric circumference = π × diameter
geometric revs per mile = 63,360 ÷ circumference in inches
change, % = (new diameter − current diameter) ÷ current diameter × 100
estimated actual speed = indicated speed × new diameter ÷ current diameter
nominal axle-height change = (new diameter − current diameter) ÷ 2
```

The speed estimate assumes the current tire matched calibration and calibration remains unchanged. Height uses the radius difference with comparable loading and tire deflection. Geometric circumference is an ideal-circle value, not measured rolling circumference.

## Worked example 1: an 18-inch wheel with a shorter sidewall

Compare **225/45R17** with **245/40R18**. The replacement has a larger wheel and a lower aspect ratio, but still ends up taller overall.

| Measurement | Current | Proposed |
|---|---:|---:|
| Nominal section width | 225 mm | 245 mm |
| Calculated sidewall | 101.25 mm | 98.00 mm |
| Nominal diameter | 634.30 mm | 653.20 mm |
| Nominal diameter | 24.97 in | 25.72 in |
| Geometric circumference | 78.45 in | 80.79 in |

```text
change = (653.20 − 634.30) ÷ 634.30 × 100 = +2.98%
axle-height change = (653.20 − 634.30) ÷ 2 = +9.45 mm
speed at 60 indicated = 60 × 653.20 ÷ 634.30 = 61.79 mph
```

A 20 mm nominal width increase does not prove exactly 10 mm more tire on each side of the installed package. Tire shape and mounting width matter; wheel offset changes the package location. The result establishes a dimensional comparison, not suitable clearance or load capacity.

## Worked example 2: metric size to a nominal 33-inch tire

For **265/70R17**, sidewall = 265 × 0.70 = 185.50 mm. Diameter = 17 + 2 × 185.50 ÷ 25.4 = 31.6063 inches. Comparing with **33x12.50R17** gives:

```text
change = (33 − 31.6063) ÷ 31.6063 × 100 = +4.41%
axle-height change = (33 − 31.6063) ÷ 2 = +0.70 inch
speed at 65 indicated = 65 × 33 ÷ 31.6063 = 67.87 mph
proposed nominal width = 12.50 × 25.4 = 317.50 mm
```

Now suppose the proposed tire’s published overall diameter is **32.6 inches**. This is a hypothetical specification, not a claim about a real product. Against the current tire’s calculated nominal diameter, the estimate becomes **+3.14%**, or **67.04 mph at 65 indicated**.

This mixed comparison illustrates input sensitivity. For a dimensional comparison, use manufacturer-published overall diameters for both exact models when available. Those dimensions still do not establish loaded rolling circumference or confirm speedometer accuracy. The live size-code calculator continues to use nominal dimensions.

## What the result means on the car

A taller tire covers more geometric distance per revolution. With unchanged calibration, speed and distance readings can underreport relative to the previous relationship. Fuel-economy arithmetic using uncorrected indicated distance inherits that error.

At the same actual road speed and selected gear, a taller tire lowers engine RPM by the inverse diameter ratio, with fixed ratios and negligible slip. Use [RPM & Speed](rpm-speed.html) for that relationship. An automatic transmission may change gear or converter operation as load changes.

More radius and more width create different clearance questions. A tire can clear when parked and contact a liner at steering lock or the body under suspension compression. Use the [Setup Planner](wheel-tire-setup.html) to compare wheel position alongside tire geometry.

## What this calculator cannot prove

### Exact dimensions and rolling behavior

The size code does not provide actual tread width, shoulder profile or loaded rolling behavior. Compare the exact tire’s specification and measuring rim. Manufacturer rolling-revolution data can differ from π times nominal diameter because tires deform during operation.

### Load capacity, pressure and wheel suitability

Diameter matching does not establish load capacity, inflation requirements, approved rim width, wheel rating, bolt pattern, hub fit or fastener compatibility. Maximum pressure on the sidewall is not automatically the vehicle’s operating pressure. Brake clearance also depends on barrel and spoke shape.

### AWD matching and performance

There is no universal diameter percentage that approves tire mixing for AWD or four-wheel drive. Follow vehicle-specific replacement and wear requirements. This tool also cannot predict grip, comfort, acceleration or fuel consumption from width and sidewall alone.

### Calibration and movement

An existing speedometer error remains relevant. The height estimate is not a measurement of every underbody component. Positive parked clearance is not proof of adequate clearance during movement.

## Before you buy or modify

1. Record the vehicle placard, approved fitments and hardware actually installed.
2. Identify the exact tire model and full service description.
3. Compare published dimensions and measuring-rim conditions.
4. Verify approved tire rim width and wheel compatibility.
5. Establish load capacity and operating-pressure requirements.
6. Compare wheel width and offset, not just tire width.
7. Have clearance assessed at steering lock and through relevant suspension travel, including hoses, liners, suspension and body.
8. Check vehicle-specific tire matching and calibration guidance.
9. Confirm TPMS, fasteners and spare-tire implications.
10. Recheck pressure, calibration and contact after installation.

The full [Buying Workflow](wheel-tire-buying-guide.html) explains how to record these checks.

## Frequently asked questions

### Is staying within 3% enough?

No. A percentage describes diameter change, not approval. A close diameter can accompany unsuitable load capacity, mounting width or clearance. AWD matching is a separate vehicle-specific question.

### Why do equal size codes measure differently?

The code is nominal. Construction, shoulders and product dimensions differ. Published section width also depends on the measuring wheel. Use data for the actual models rather than transferring dimensions between brands.

### Does a larger wheel always make a taller tire?

No. A larger wheel can be paired with a shorter sidewall. Calculate the complete size; the wheel-diameter number alone cannot describe overall tire diameter.

### Does more width mean more grip?

This tool cannot establish that. Compound, construction, tread, operating temperature and mounting conditions matter. Width is a dimension useful for investigating clearance, not a performance rating.

### Why are published revolutions per mile different?

The displayed value is geometric. A rolling tire deforms under load, and manufacturer figures have measurement conditions. Use appropriate rolling data when precision matters rather than assuming nominal diameter reproduces it.

### Is the height result my ground-clearance gain?

It is a nominal axle-center change. Loading, deflection and the particular component affect actual clearance. Measure the point relevant to your use rather than applying the result to the entire vehicle.

### Can I replace one AWD tire if its size matches?

A matching code does not establish matching rolling behavior. Exact model and wear may matter. Follow the vehicle’s replacement guidance before selecting a single tire; this tool cannot set an allowable mismatch.

### Can tire size correct my speedometer?

Size changes the revolution-to-distance relationship but does not verify calibration. Choose a suitable package first, then assess the actual speed relationship and the vehicle’s appropriate calibration method.

## Related tools and sources

Read [Tire Size Explained](tire-size-guide.html), [Wheel Offset](wheel-offset.html), [Speedometer & Distance](speedometer-guide.html) and [Methodology](methodology.html). The diagram compares nominal dimensions on one scale; it is not a clearance drawing.

Sources: [Michelin tire markings](https://www.michelinman.com/auto/auto-tips-and-advice/tires-101/tire-markings-explained), [Michelin size changes](https://www.michelinman.com/auto/auto-tips-and-advice/tire-buying-guide/change-size-spec), and [USTMA replacement guidance](https://www.ustires.org/tire-care-safety/replacing-tires). Examples are original calculations, not product recommendations.
