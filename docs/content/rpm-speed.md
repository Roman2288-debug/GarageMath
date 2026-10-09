# rpm-speed

Canonical: https://garagemath.com/rpm-speed

## How RPM and road speed are related

Transmission gear ratio and final-drive ratio multiply to form the engine-to-wheel ratio. A ratio of 0.70 and axle ratio of 3.73 give 2.611 engine revolutions per wheel revolution, ignoring slip.

```text
overall ratio = gear ratio × final drive
speed, mph ≈ engine RPM × tire diameter, in ÷ (overall ratio × 336)
engine RPM ≈ speed, mph × overall ratio × 336 ÷ tire diameter, in
```

The rounded 336 constant combines minutes per hour, inches per mile and π: 63,360 ÷ (60π) ≈ 336.135. GarageMath retains the stated conventional 336 formula, so it is itself a small approximation. Enter diameter, not wheel diameter or radius. Ratios are dimensionless and RPM is revolutions per minute.

## Worked example 1: cruise gearing

Use **26-inch tires**, **0.70 gear**, **3.73 final drive** and **70 mph**:

```text
RPM = 70 × 0.70 × 3.73 × 336 ÷ 26
    ≈ 2,362 RPM
speed at 2,500 RPM = 2,500 × 26 ÷ (0.70 × 3.73 × 336)
                  ≈ 74.09 mph
```

These are theoretical values for the selected gear. A road reading can differ through tire rolling behavior, converter slip or instrument error. Verify what gear the transmission actually selects.

## Worked example 2: change tire diameter or axle ratio

Keep 0.70 and 3.73 but use **28-inch tires**. At 70 mph, RPM becomes **2,193**, about 169 RPM lower. This is inverse diameter scaling, not an efficiency prediction.

With 26-inch tires and a **4.10 final drive**, the same calculation gives **2,596 RPM** at 70 mph. The optional alternative-ratio field shows this comparison while holding the other inputs fixed. Label which variable changed before interpreting the table.

## What the result means on the car

A numerically higher overall ratio increases engine RPM at a given actual road speed. A taller tire reduces it. A lower RPM number does not automatically mean better fuel economy: load, engine efficiency, transmission behavior and terrain determine the operating result.

Use the table to identify whether a proposed combination moves cruise operation where you expect. It does not establish acceleration, towing suitability, gearing strength or comfortable engine operation. Changing tire diameter also changes calibration assumptions discussed in [Tire Size](tire-size.html).

## What this calculator cannot prove

It assumes fixed ratios and ignores clutch or converter slip. It does not model CVT operation, shift scheduling, final-drive splits or manufacturer-specific drivetrain behavior. Nominal tire diameter is not exact rolling circumference, and loaded radius alone is not necessarily a reliable way to derive rolling circumference.

The tool has no power curve or road-load model. It cannot establish whether the engine can reach a calculated speed, hold a gear on a grade, or operate safely at an entered RPM. Do not treat a theoretical speed as a public-road testing target.

## Before you change gearing

1. Verify the actual transmission gear and final drive.
2. Identify the tire diameter convention and available rolling data.
3. Compare proposed combinations at the same actual speed.
4. Check vehicle requirements, calibration and drivetrain compatibility.
5. Assess engine operating range, duty and load with suitable expertise.
6. Record real steady-state RPM and speed separately from the estimate.

## Frequently asked questions

### Is the entered diameter the wheel size?

No. It is overall tire diameter in inches. A 17-inch wheel with a tire may have roughly a 25-inch overall diameter. Entering 17 would misrepresent distance per revolution.

### Why does my tachometer disagree?

Check actual gear selection, ratios, tire data and instrument accuracy. Converter slip can add RPM. A discrepancy does not identify which of these assumptions is wrong by itself.

### Is the 336 constant exact?

No. It is the conventional rounded conversion constant. Its small rounding error is usually less important than tire and slip uncertainty, but the equation labels should remain approximate.

### Can I use this for a CVT?

Only for a particular known instantaneous ratio with the stated assumptions. A CVT varies ratio; the tool does not predict its control behavior across speed and load.

### Do taller tires act like a lower axle ratio?

At fixed actual speed and gear, they reduce required RPM. They also change the wheel’s leverage relationship. That comparison does not establish equivalent acceleration, shift behavior or component loading.

### Will lower cruise RPM save fuel?

Not necessarily. Engine operating efficiency and load can change, and the transmission may select another gear. Use measured fuel consumption or a suitable engineering model for that question.

### Why compare at actual speed instead of indicated speed?

A tire change can alter speedometer readings. Comparing two indicated readings may compare different actual speeds. Keep the physical speed basis consistent when evaluating gearing.

## Related guide and assumptions

Read [Gear Ratio, Tire Diameter & Cruise RPM](gear-ratio-guide.html) and [Speedometer Error](speedometer-guide.html). The [Setup Planner](wheel-tire-setup.html) links tire and wheel changes. These examples use the calculator’s 336 convention and fixed ratios with negligible slip.
