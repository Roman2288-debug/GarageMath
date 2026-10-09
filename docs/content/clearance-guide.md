# Measuring Wheel & Tire Clearances

Canonical: https://garagemath.com/clearance-guide

Document the reference, condition and movement behind a clearance measurement before using it in a package comparison.

## A clearance is a relationship, not just a number

“Ten millimeters of room” is incomplete information. Room between what, measured where, with the vehicle in which condition? A wheel lip, tire shoulder, strut tube and fender boundary are different references. A parked measurement does not describe the whole path taken during steering or suspension movement.

This guide helps you build a useful measurement record and understand what needs assessment. It does not prescribe lifting, spring removal or forced suspension-compression procedures. Those operations can require appropriate equipment and expertise. The objective is to identify the evidence a fitment decision needs, not to improvise a mechanical procedure from a calculator output.

## Separate four clearance questions

Wheel-to-suspension clearance describes the wheel’s physical envelope relative to nearby suspension parts. Tire-to-suspension clearance includes sidewall and shoulder profile, which can extend beyond the wheel. Tire-to-body clearance concerns liners, arches and other body references. Brake clearance concerns caliper, spoke and barrel shape.

None is a substitute for the others. A wheel may bolt on and rotate while its tire contacts a liner at steering lock. A tire may clear the body while the wheel’s spoke shape conflicts with the caliper. Create separate entries so a passed check does not hide an unchecked relationship.

## Establish reference planes

Record whether a wheel measurement uses bead-seat geometry or the physical flange. GarageMath’s offset comparison uses bead-seat width; its relative edge interpretation assumes comparable flange allowances. Physical backspacing reaches the actual inner lip. A tire-sidewall measurement belongs to the tire envelope rather than either wheel plane.

Use a consistent hub mounting reference when comparing proposed wheel geometry. Record spacers or other mounting changes. If the current mounting arrangement differs from the proposed one, the reference relationship changes. Label that change instead of attributing every difference to the wheel’s printed offset.

## Record the measurement condition

Document the vehicle’s loading, steering position, suspension condition, tire pressure and mounted tire/wheel combination. Record the exact location of the nearest point rather than assuming the most visible gap is the smallest. Photographs can support the record but should not replace dimensions when scale and perspective are uncertain.

A measurement is useful only within its stated conditions. The purpose of noting pressure and loading is not to claim a universal correction formula. It is to prevent two measurements under different conditions being treated as equivalent. If a qualified assessment identifies a tighter position elsewhere in the movement envelope, preserve that finding rather than relying on the original parked gap.

## Example 1: wheel-edge budget

Current setup is an 8-inch ET40 wheel. Proposed setup is 9 inches ET35. The nominal inner reach grows 7.7 mm and outer reach grows 17.7 mm. Suppose comparable current wheel-edge measurements are 12 mm inner and 15 mm to an outer boundary.

```text
remaining inner wheel gap = 12 − 7.7 = 4.3 mm
remaining outer wheel gap = 15 − 17.7 = −2.7 mm
```

The outer result crosses that measured boundary in the simplified model. The positive inner result does not establish a suitable margin. If the tire extends farther than the wheel or movement reduces the gap, this wheel-only arithmetic misses it. Enter these numbers in the [Setup Planner](wheel-tire-setup.html) only when their references match its wheel-edge fields.

## Example 2: a valid number with the wrong reference

Suppose 12 mm was measured from the **tire sidewall** to a strut, not from the wheel edge. Subtracting the wheel’s 7.7 mm inward change gives 4.3 mm numerically, but that result lacks a justified tire-envelope model. A new tire and mounting width can change where the sidewall sits relative to the wheel.

The calculation is not wrong arithmetic; it is an unsupported application. Record the sidewall gap separately and obtain actual mounted-dimension evidence for the proposed tire. This distinction matters because a precise-looking result can conceal a mismatch between what was measured and what was modeled.

## Assess the movement envelope

Steering changes the position of the tire around the wheel opening and nearby components. Suspension travel and alignment relationships change other clearances. The narrowest gap may occur at a particular combination rather than at straight-ahead normal ride height.

Have the relevant envelope assessed using appropriate procedures for the vehicle. The assessment should include liners, hoses, suspension components and body features, not merely the metal arch above the tire. Record positions checked and unresolved conditions. A claim that “it clears” should identify what was assessed; it should not imply every possible load and movement was observed.

## Check the brake package independently

Width, offset and diameter do not fully define spoke-to-caliper clearance. Barrel shape and balance-weight location may also matter. Use exact wheel/brake compatibility information, an appropriate manufacturer template or a competent physical test fit.

A template should be used under its own instructions and for the correct brake package. A similar trim or wheel photograph is not equivalent evidence. If brake hardware has changed, factory fitment information may no longer describe the installed arrangement. Keep brake compatibility as its own verification line in the worksheet.

## Common mistakes

- Recording a gap without identifying both endpoints.
- Using tire clearance in a wheel-edge calculator field.
- Comparing a parked gap with an assumed fully loaded condition.
- Treating fender appearance as the only outer constraint.
- Assuming more inner wheel room establishes brake clearance.
- Using a favorable nominal result as a universal minimum margin.

Another mistake is retaining a measurement after changing the baseline hardware. If the current tire, wheel, spacer, alignment or relevant suspension parts change, the old record may no longer represent the vehicle. Reassess the affected relationships rather than adjusting every old gap with an unrelated formula.

## A practical worksheet

Use rows for wheel-to-suspension, tire-to-suspension, tire-to-body, and wheel-to-brake checks. Include reference points, condition, method, dimension or verified outcome, and evidence source. Mark unknowns explicitly. For a proposed part, record whether the conclusion is dimensional screening, manufacturer information or physical verification.

The decision checklist is: identify the actual baseline; obtain exact proposed specifications; compare geometry using matching references; assess movement and brake compatibility; verify ratings and hardware; and retain the records with the package. The calculator’s output belongs in the screening column, not the final approval column.

## What the calculator still cannot see

It cannot scan the vehicle, establish acceptable clearances, predict tire deflection or verify installation. It cannot know measurement uncertainty or whether the entered gap was taken from the intended reference. Negative budget values identify an issue to investigate; positive values do not remove the need for assessment.

Read the [Buying Workflow](wheel-tire-buying-guide.html), [Offset & Backspacing](wheel-offset-guide.html), and [Manufacturer Specifications](manufacturer-specs-guide.html). Use [Wheel Offset](wheel-offset.html) and [Backspacing](wheel-backspacing.html) for their distinct geometry conventions. This guide’s examples are original and provide no universal safe-clearance threshold.
