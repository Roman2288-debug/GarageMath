# wheel-tire-setup

Canonical: https://garagemath.com/wheel-tire-setup

## How the combined comparison works

This planner combines two independent geometry models. Tire dimensions come from nominal size codes. Wheel positions come from bead-seat width and signed offset relative to an unchanged hub face. Combining them in one sheet does not create a physical vehicle model.

```text
tire diameter = wheel diameter + two calculated sidewalls
inner wheel position, mm = width inches × 25.4 ÷ 2 + offset
outer wheel position, mm = width inches × 25.4 ÷ 2 − offset
remaining inner gap = measured baseline gap + inner clearance change
remaining outer gap = measured baseline gap − outward extension change
```

Optional gaps refer to the **current wheel edge**, not tire sidewall. Relative bead-seat changes approximate edge changes when flange allowances are comparable. Record that assumption and use actual wheel dimensions when tight. Blank gap fields mean no clearance budget is calculated; zero means a measured zero gap.

## Worked example 1: wider wheel with a taller tire

Compare **225/45R17 on 8 inches ET40** with **245/40R18 on 9 inches ET35**. The tire changes from **24.97 to 25.72 inches nominal diameter**, about **+2.98%**. At 60 indicated, estimated actual speed is **61.79 mph** under unchanged calibration.

The wheel adds 12.7 mm to each half-width and moves centerline outward 5 mm. It therefore consumes **7.7 mm inner room** and extends **17.7 mm outward**. With measured current wheel-edge gaps of **12 mm inner** and **15 mm outer**:

```text
inner remainder = 12 − 7.7 = 4.3 mm
outer remainder = 15 − 17.7 = −2.7 mm
```

The outer result crosses the entered boundary. The positive inner result does not establish a sufficient margin or tire clearance.

## Worked example 2: translate the wheel without changing the tire

Keep **225/45R17** and **8-inch width**, changing **ET40 to ET30**. Diameter and geometric speed relationship remain unchanged. The nominal wheel moves outward **10 mm**.

With the same **12 mm inner** and **15 mm outer** baseline gaps, the comparison gives **22 mm inner** and **5 mm outer** remaining. This isolates offset from tire diameter. Brake shape, steering geometry and dynamic clearance are still unresolved.

## What the result means on the car

The comparison identifies changes to investigate. It can show why lower offset does not always improve inner room when width increases, and why a tire diameter percentage cannot answer a wheel-position question.

The diagram deliberately does not draw a fictional fender or suspension shape. The circle comparison uses one scale for nominal diameters, while the wheel view uses the hub face as its reference. Neither shows camber, tire shoulders or movement.

## What the planner cannot prove

It has no vehicle database, body scan or brake-envelope model. It cannot certify fitment, acceptable clearance margins, load capacity, approved rim widths, fasteners, hub engagement, alignment consequences or AWD suitability.

A wheel edge and a tire sidewall are different references. Do not enter a tire-to-strut measurement into a wheel-edge gap field. A negative remainder identifies a conflict with the entered simplified boundary; a positive remainder leaves a measurement to verify. Current rubbing or an incorrect baseline cannot be repaired by arithmetic.

## Before buying the package

1. Record tire and wheel markings from the actual baseline.
2. Identify exact proposed products and published dimensions.
3. Verify ratings, rim range, mounting hardware and brake compatibility.
4. Label each gap by reference plane, location and measurement condition.
5. Have clearance assessed through steering and suspension movement.
6. Check vehicle-specific calibration and tire-matching requirements.
7. Keep the comparison with the product and measurement records.

## Frequently asked questions

### Does a positive remaining gap mean it fits?

No. It is a subtraction under the stated reference-plane assumptions. Dynamic motion and the tire envelope remain outside the model. The planner does not set an acceptable margin.

### Can I use a tire-sidewall gap in the optional fields?

No. Those fields use wheel-edge gaps. Mixing references makes the result misleading. Record tire clearance separately in the measurement workflow.

### Why can lower offset still consume inner room?

Additional width can exceed the outward centerline shift. Example 1 adds 12.7 mm inward through width and recovers only 5 mm through offset, consuming 7.7 mm overall.

### What does a blank gap mean?

It means you have not supplied that measurement, so no remainder is shown. Entering zero is different: it states the baseline gap is zero.

### Can the wheel clear while the tire rubs?

Yes. The tire may extend beyond the wheel and change shape under load. Wheel-edge geometry cannot reconstruct its actual sidewall or shoulder envelope.

### Does close tire diameter approve AWD use?

No. Follow the vehicle manufacturer’s requirements for model matching, wear and rolling behavior. The percentage is a comparison, not a universal tolerance.

### Can I share the full setup?

The share URL preserves entered fields. Copied results include inputs, principal results and next-check context. Anyone with the URL can see those values; do not include private identifiers.

## Related guides and tools

Read the [Buying Workflow](wheel-tire-buying-guide.html), [Clearance Measurement Guide](clearance-guide.html), [Manufacturer Specifications](manufacturer-specs-guide.html), and [AWD Tire Matching](awd-tire-guide.html). Use [Tire Size](tire-size.html), [Wheel Offset](wheel-offset.html) and [Backspacing](wheel-backspacing.html) to inspect each component relationship independently.
