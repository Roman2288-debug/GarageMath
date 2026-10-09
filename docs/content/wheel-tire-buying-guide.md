# Wheel & Tire Package: A Decision Workflow

Canonical: https://garagemath.com/wheel-tire-buying-guide

Build a complete comparison record, then verify the dimensions and requirements the calculators cannot establish.

## Start with the decision you are actually making

A wheel-and-tire purchase is a package decision. Diameter, width, position, ratings and hardware interact, but no single calculator can approve the combination. The purpose of this workflow is to make unknowns visible before you order. It applies whether you want a different appearance, a replacement for damaged parts or a change in operating behavior.

Write the objective first. “Replace the worn tires without changing approved fitment” is a different project from “change wheel width and diameter.” A defined objective helps you reject changes that add cost or uncertainty without solving the original problem. Keep the original vehicle requirements as constraints rather than treating a favorable calculator result as permission to disregard them.

## Step 1: record the vehicle and installed baseline

Record vehicle year, model, trim and relevant brake or suspension changes. Record the tire placard and owner’s-manual requirements. Then record the hardware actually installed: exact tire models and sizes, wheel diameter, bead-seat width, signed offset, and mounting changes such as spacers.

The installed package may differ from factory specification. It may also already rub or use unsuitable hardware. Separate “currently installed” from “approved baseline.” A calculation can compare against either, but their meanings differ. Do not use an existing problem as evidence that a similar proposed arrangement is acceptable.

## Step 2: screen tire dimensions

For metric tire codes, sidewall height equals width times aspect ratio divided by 100. Nominal diameter equals wheel diameter plus two sidewalls. Compare this first to understand changes in radius, speed calibration and effective gearing.

```text
nominal diameter, mm = rim inches × 25.4 + 2 × width mm × aspect ÷ 100
change, % = (proposed diameter ÷ baseline diameter − 1) × 100
```

Use the [Tire Size calculator](tire-size.html) for screening. Then obtain the exact product’s published dimensions and approved rim range. Nominal code geometry and published product data are different records. Neither establishes full loaded rolling behavior or body clearance.

## Step 3: screen wheel position

Width is normally entered in inches while offset is millimeters. Convert once, use a consistent hub reference, and compare inward reach and outward extension separately. The [Wheel Offset calculator](wheel-offset.html) shows both changes; the [Setup Planner](wheel-tire-setup.html) keeps wheel and tire comparisons together.

Example A uses 225/45R17 on an 8-inch ET40 wheel and proposes 245/40R18 on a 9-inch ET35 wheel. Nominal tire diameter grows from 634.30 to 653.20 mm, or 2.98%. Approximate axle-height change is 9.45 mm. Wheel geometry consumes 7.7 mm inner room and extends 17.7 mm outward. These are four different outputs, not one overall fitment score.

## Step 4: test a measured clearance budget

Suppose comparable current wheel-edge measurements are 12 mm to an inner reference and 15 mm to an outer boundary. For example A:

```text
inner remainder = 12 − 7.7 = 4.3 mm
outer remainder = 15 − 17.7 = −2.7 mm
```

The proposed nominal edge crosses the outer measured boundary. A positive inner remainder is not a recommended margin. The wheel-edge calculation does not account for the wider tire’s shoulder, camber or motion. Record reference planes and measurement conditions; do not put a tire-sidewall gap into the planner’s wheel-edge field.

## Step 5: compare a simpler alternative

Example B keeps the same tire and 8-inch width but changes ET40 to ET30. Tire diameter does not change. Wheel position shifts outward 10 mm, gaining nominal inner room and consuming outer room. With the same entered gaps, remainders become 22 mm inner and 5 mm outer.

This isolates one variable and makes the compromise clear. It does not make example B a recommendation. The different position can affect other relationships outside the tool, and actual wheel and tire construction still require checking. A simpler dimensional comparison can reduce uncertainty without resolving every requirement.

## Step 6: complete the product specification checks

Confirm the exact tire’s service description, load capability and approved rim range. Confirm wheel diameter, width, offset, bolt pattern, center bore, load rating and fastening requirements. Brake compatibility must be evaluated for the exact wheel and brake package; diameter and offset alone cannot describe spoke shape.

Confirm pressure requirements for the application. The tire’s maximum sidewall pressure is not automatically the vehicle operating pressure. Alternative fitments may require guidance from the vehicle and tire manufacturer or a qualified specialist. Keep that guidance with the part numbers so it can be checked again at installation.

## Step 7: verify movement and installation

Parked straight-ahead clearance is only one condition. Have steering-lock and relevant suspension-travel clearance assessed, including tire-to-body, tire-to-suspension, hoses, liners and brake components. Appropriate equipment and competence may be needed. The purpose is to verify the envelope, not to improvise a suspension-compression procedure from an internet calculation.

Check mounting instructions, TPMS, fasteners and spare implications. Inspect the installed arrangement and confirm pressures and any required calibration. A test drive cannot replace a compatibility assessment, and a lack of immediate rubbing does not establish clearance under every load or movement.

## Common mistakes

A common mistake is deciding from diameter percentage alone. Another is buying a wheel before checking its approved tire range and then treating the remaining tire choice as inevitable. A third is mixing physical wheel backspacing with nominal bead-seat geometry. Each changes the meaning of the comparison without making that change visible.

Avoid copying specifications from a visually similar wheel, assuming all tires with the same code share dimensions, or transferring a fitment claim between trims. Also avoid counting a spacer twice: if effective offset already includes its thickness, do not subtract it again in another stage.

## A decision record worth keeping

Use a record with four columns: requirement, source, proposed value and verification status. For example, approved rim range should cite the exact tire specification; brake clearance should identify the wheel/brake assessment; tire matching should cite vehicle guidance. Mark unknowns as unknowns rather than filling them with generic allowances.

A package is ready for a purchase decision when the requirements have appropriate evidence, not when every calculator output looks favorable. Keep dated specifications, measurements and the shared calculator link together. Copied or printed results help document inputs, but they do not convert assumptions into measurements.

## Related guides and sources

Read [Tire Size Explained](tire-size-guide.html), [Offset & Backspacing](wheel-offset-guide.html), [Measuring Clearances](clearance-guide.html), [AWD Matching](awd-tire-guide.html), and [Manufacturer Specifications](manufacturer-specs-guide.html).

Sources and assumptions: original examples use nominal tire geometry and the calculator’s bead-seat conventions. [USTMA replacement guidance](https://www.ustires.org/tire-care-safety/replacing-tires) and [Michelin size-change guidance](https://www.michelinman.com/auto/auto-tips-and-advice/tire-buying-guide/change-size-spec) support starting with vehicle requirements. Neither these worked examples nor a shared result constitutes manufacturer approval.
