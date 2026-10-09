# Gear Ratio, Tire Diameter & Cruise RPM

Canonical: https://garagemath.com/gear-ratio-guide

Compare cruise RPM at the same actual speed and identify the gearing and tire assumptions behind the result.

## Start with a fixed road-speed question

The most useful gearing comparison asks what engine RPM a combination produces at a chosen actual road speed in a particular gear. That separates the mechanical relationship from acceleration, transmission control and fuel economy. A lower RPM can be desirable in one application and unsuitable in another; the calculator does not decide that.

Record the actual transmission gear ratio, final drive and tire-data convention. A marketing label such as “overdrive” is not a numeric ratio. Likewise, a tire’s wheel diameter is not its overall diameter. Missing or uncertain inputs should remain visible in the comparison rather than being replaced by a plausible default without explanation.

## Multiply the drivetrain ratios

Transmission ratio G and final drive F give the overall ratio G × F. With 0.70 and 3.73, the result is 2.611 engine revolutions per wheel revolution under fixed mechanical coupling. Higher numerical ratios produce more engine revolutions for the same wheel revolutions.

```text
speed, mph ≈ RPM × tire diameter in inches ÷ (G × F × 336)
RPM ≈ speed mph × G × F × 336 ÷ tire diameter in inches
```

The conventional 336 constant approximates 63,360/(60π), which is about 336.135. The tool uses the disclosed rounded convention. Displayed integer RPM does not imply that real road RPM is known to the nearest revolution.

## Example 1: establish a cruise baseline

With 26-inch tires, 0.70 gear and 3.73 final drive, 70 mph calculates to 2,361.95 RPM, displayed as about 2,362. At 2,500 RPM, the same combination calculates to 74.09 mph.

This is a theoretical baseline. If observed RPM differs, first verify gear selection, ratio data, tire rolling behavior and instrument readings. Converter slip can contribute, but a difference is not proof of converter malfunction. The model cannot diagnose why a reading disagrees.

## Example 2: isolate tire diameter

Keep gear and final drive unchanged but use 28-inch tires. At 70 mph, RPM is 2,193.24, approximately 169 lower. The inverse diameter ratio explains the change:

```text
new RPM = 2,361.95 × 26 ÷ 28 = 2,193.24
```

The tire change also affects calibration and the package’s physical suitability. It does not simply “add overdrive” in every practical sense. Wheel mass, tire behavior, clearance and transmission response remain separate questions. Use [Tire Size](tire-size.html) and the [Setup Planner](wheel-tire-setup.html) for those dimensional comparisons.

## Example 3: isolate final drive

Return to 26-inch tires and change final drive from 3.73 to 4.10. At 70 mph in 0.70 gear, calculated RPM rises to 2,596.25. The difference is about 234 RPM. This direct ratio change is easier to interpret when tire diameter and speed are held fixed.

The [RPM & Speed calculator](rpm-speed.html) provides an optional alternative final-drive field and a speed table. Label the two axle ratios clearly and resist changing tire diameter at the same time unless you intend to evaluate the combined package. One-variable comparisons make assumption errors easier to spot.

## Actual speed is the comparison basis

After a tire change, the same speedometer reading may not represent the same actual speed. If a larger tire changes an unchanged calibration relationship, comparing RPM at 70 indicated before and after can obscure what happened at 70 actual.

Keep separate records for indicated speed, independently assessed road speed and theoretical model speed. The [Speedometer & Distance Guide](speedometer-guide.html) explains the diameter-ratio estimate. An original instrument error also matters; a nominal tire ratio does not prove the original speedometer was accurate.

## Rolling data and loaded dimensions

A nominal tire diameter comes from its size code. Published overall diameter is a product dimension. Rolling circumference or revolutions per mile describes an operating relationship under stated conditions. These can differ because the tire deforms as it rolls.

If appropriate rolling revolutions per mile are available, a more direct fixed-ratio relationship is RPM = mph × revs per mile × overall ratio ÷ 60. That is a separate convention from the diameter-input tool. Loaded radius alone should not be assumed to reproduce measured rolling circumference. Record the data source and method rather than mixing conventions silently.

## Common mistakes

- Entering wheel diameter instead of tire diameter.
- Using the wrong selected gear or an assumed overdrive ratio.
- Confusing a numerically higher ratio with physically taller gearing.
- Comparing at indicated rather than consistent actual speed.
- Attributing every RPM discrepancy to slip.
- Treating low cruise RPM as proof of lower fuel consumption.

Another mistake is inferring available top speed from RPM alone. The equation converts a chosen RPM to theoretical speed; it does not establish enough power to overcome road load. It also does not evaluate operating limits, tires, braking, legal conditions or vehicle stability.

## What the calculator still cannot see

It has no engine efficiency map, torque curve, aerodynamic model, shift schedule or converter model. It does not predict whether a transmission will hold a gear on a hill or whether the engine will operate comfortably under load. CVT and other variable-ratio behavior require additional information.

A combination should be evaluated for its actual duty: commuting, towing, track use or another defined purpose. Mechanical compatibility and manufacturer requirements remain outside the model. The calculator gives a relationship, not a gearing recommendation.

## Decision checklist

Identify the operating speed and selected gear. Verify ratios and tire-data convention. Compute a baseline and one-variable alternatives. Record uncertainty in inputs. Check calibration and component compatibility before purchasing. Then compare real steady-state operation under appropriate conditions with the theoretical record.

For fuel implications, use measured consumption and the [Fuel Cost guide](fuel-economy-guide.html) rather than converting an RPM reduction directly to dollars saved. Keep the mechanical and economic questions separate so each can use the evidence it needs.

## Use the table as a measurement plan

A cruise table can identify several operating points to compare rather than one memorized number. For example, keep the same ratio assumptions and review 50, 60 and 70 mph. The model’s RPM scales linearly with actual speed, so a discrepancy that changes nonlinearly may deserve a closer look at gear selection or operating conditions. That observation is an investigation prompt, not a diagnosis.

Record the selected gear and whether the comparison is an independent steady-state observation or only a dashboard reading. Avoid gathering data in conditions that distract the driver. A suitable professional assessment can provide the necessary evidence without turning a calculation into an improvised road test. Keep measured observations in a separate column from theoretical RPM so the table does not imply every entry was physically verified.

## Related reading and assumptions

Read [Tire Size Explained](tire-size-guide.html), [Speedometer Error](speedometer-guide.html), and [Power-to-Weight](power-to-weight-guide.html). Examples use the tool’s rounded 336 convention, fixed ratios and negligible slip. [Spicer’s ratio calculator](https://spicerparts.com/calculators/transmission-ratio-rpm-calculator) is a manufacturer reference for the general relationship. No top-speed, economy or component approval is implied.
