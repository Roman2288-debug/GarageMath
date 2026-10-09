# wheel-offset

Canonical: https://garagemath.com/wheel-offset

## How the wheel-position math works

Offset is the signed distance from the wheel centerline to its hub mounting face, in millimeters. Positive offset places that face toward the wheel’s outside; at the same width, increasing positive offset moves the installed wheel inward. ET40 means +40 mm. Enter negative offset with a minus sign.

This comparison uses advertised **bead-seat width**, converted from inches. Its inner and outer positions are distances from the unchanged hub face to nominal wheel reference planes. They are not measurements of the tire or a physical flange.

```text
half-width, mm = bead-seat width, inches × 25.4 ÷ 2
inner position = half-width + offset
outer position = half-width − offset
inner clearance change = current inner position − proposed inner position
outer extension change = proposed outer position − current outer position
```

Positive inner-clearance change means more nominal suspension-side room. Positive outer-extension change means farther outward. These sign conventions describe different directions; do not read both positive values as “better.”

## Worked example 1: unchanged width, less positive offset

Compare an **8-inch ET40** wheel with an **8-inch ET30** wheel. Half-width is 101.6 mm in both cases.

```text
current inner = 101.6 + 40 = 141.6 mm
proposed inner = 101.6 + 30 = 131.6 mm
inner clearance change = 141.6 − 131.6 = +10.0 mm
current outer = 101.6 − 40 = 61.6 mm
proposed outer = 101.6 − 30 = 71.6 mm
outer extension change = 71.6 − 61.6 = +10.0 mm
```

The wheel translates outward by 10 mm. It gains nominal inner room and uses outer room at the same time. Nothing here establishes brake-spoke clearance or whether that movement is suitable for the steering geometry.

## Worked example 2: wider wheel and lower offset

Compare **8 inches ET40** with **9 inches ET35**. Width grows by 25.4 mm, or 12.7 mm per side; centerline moves outward by 5 mm.

```text
proposed half-width = 9 × 25.4 ÷ 2 = 114.3 mm
proposed inner = 114.3 + 35 = 149.3 mm
inner clearance change = 141.6 − 149.3 = −7.7 mm
proposed outer = 114.3 − 35 = 79.3 mm
outer extension change = 79.3 − 61.6 = +17.7 mm
```

Despite lower offset, the wider wheel uses 7.7 mm of inner room. If the current comparable reference plane has 12 mm clearance, the simplified budget leaves 4.3 mm. That is a dimension, not an acceptable-clearance recommendation.

## What the result means on the car

Width and offset act together. Offset alone cannot describe whether a proposed wheel moves away from the strut. The comparison tells you which side needs further investigation and by how much the nominal planes move.

Wheel flanges and tires extend beyond the bead-seat planes used here. Relative edge changes approximate physical wheel-edge changes only if flange construction is comparable. Use exact dimensions or measurement for tight clearances. The [Setup Planner](wheel-tire-setup.html) adds tire diameter and optional measured wheel-edge budgets without approving fitment.

## What this calculator cannot prove

It does not model tire section width, shoulder shape, camber, steering movement, suspension travel, brake envelope, bearing loads or scrub radius. It cannot approve bolt pattern, hub bore, fasteners, wheel load capacity or spacer use. A positive inner result is not evidence that every suspension component clears.

A spacer of thickness t geometrically reduces effective offset by t when the mounting arrangement is otherwise unchanged. That arithmetic does not establish hub engagement, fastening suitability, strength or manufacturer permission. Do not use a spacer to hide an unresolved compatibility problem.

## Before you buy or modify

1. Verify the installed wheel markings and mounting arrangement.
2. Confirm widths are bead-seat widths and offsets are signed millimeters.
3. Obtain exact wheel and tire dimensions, ratings and hardware requirements.
4. Record inner and outer clearances using consistent reference planes.
5. Have steering, suspension and brake clearance assessed on the actual vehicle.
6. Keep the calculation separate from final installation approval.

## Frequently asked questions

### Does lower offset always give more strut clearance?

Only at unchanged width and mounting conditions. Extra width can consume more room than the offset change gains. Example 2 shows that effect directly.

### What does a negative inner-clearance change mean?

It means the proposed nominal inner plane extends farther toward the suspension. Subtract that consumed room from a comparable baseline measurement; the tool has not measured the baseline for you.

### Why are both changes positive in example 1?

The signs describe different quantities. Moving outward increases inner room and outer extension simultaneously. More room on one side usually costs room on the other.

### Are two ET35 wheels positioned the same?

Their centerlines share the offset relationship, but differing widths place their edges differently. Tire profile and flange design can also differ. Compare full specifications, not ET alone.

### Will this tell me if my tires rub?

No. Tire shoulders and sidewalls can extend beyond the wheel. Movement changes the envelope. Use exact tire data and physical assessment rather than applying wheel-plane changes to the entire tire.

### Does this prove caliper clearance?

No. Spoke shape, mounting-pad design and barrel profile matter independently. Check the exact wheel against the brake package or an appropriate manufacturer template.

### Can I enter a spacer-adjusted offset?

For geometry, effective offset is listed offset minus spacer thickness in millimeters. Label that assumption in your records. The calculation cannot determine whether the spacer or fasteners are suitable.

## Related tools and assumptions

Read the [Offset & Backspacing Guide](wheel-offset-guide.html), use [Backspacing](wheel-backspacing.html) for its separate measurement convention, and consult [Measuring Clearances](clearance-guide.html). Conversion is exactly 25.4 mm per inch. Examples use nominal bead-seat planes and an unchanged hub mounting reference; see [Methodology](methodology.html).
