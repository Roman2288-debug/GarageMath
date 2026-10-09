# Quarter-Mile Estimates: What the Formulas Predict

Canonical: https://garagemath.com/quarter-mile-guide

Use fixed-coefficient estimates as controlled comparisons and keep actual passes, conditions and measurement bases separate.

## An equation output is not a simulated pass

GarageMath’s quarter-mile tool uses two inputs, horsepower and weight. It does not calculate the vehicle’s changing acceleration along the track. Its result is an empirical screening estimate: a reproducible output from a disclosed relationship, with major real-world variables omitted.

The useful decision is whether the model helps compare the direction and approximate scale of a proposed change. It should not promise a time slip or diagnose a vehicle from a discrepancy. Before using it, record power basis, operating weight and why those inputs are credible for the scenario.

## Inspect the equations

```text
ET seconds = 5.825 × cube root(weight lb ÷ hp)
trap mph = 234 × cube root(hp ÷ weight lb)
```

The coefficients belong to this particular units-and-convention model. GarageMath does not provide a validated fleet calibration or uncertainty interval for them. We disclose them so users can reproduce the calculation rather than mistake it for a hidden vehicle simulation.

Different empirical models can use other constants and power conventions. Do not combine their outputs into an apparent confidence range without evidence. A disagreement between formulas does not identify which one predicts your vehicle best.

## Example 1: a baseline response

At 350 hp and 3,500 lb, weight per horsepower is 10. The equations yield 12.55 seconds and 108.61 mph. Enter those values in the [Quarter-Mile calculator](quarter-mile.html) to reproduce the result.

The displayed decimals are calculation resolution, not track accuracy. The model has not selected tires, simulated launch, scheduled shifts or assessed weather. Its output remains conditional on inputs and model applicability even when the arithmetic is exact.

## Example 2: add power, keep weight fixed

At 400 hp and the same 3,500 lb, outputs become 12.00 seconds and 113.56 mph. The formula response is about 0.55 second less ET and 4.94 mph more trap speed.

Power increased by 14.3%, but ET does not improve by 14.3%. The cube root makes the response nonlinear. In this model, doubling power at fixed weight multiplies ET by the cube root of one half, approximately 0.7937. That is a property of the equation, not proof a real doubled-power vehicle will achieve the same gain.

## Example 3: operating weight matters

At 350 hp and 3,700 lb rather than 3,500 lb, the model produces approximately 12.78 seconds and 106.62 mph. If one comparison omitted occupants or fuel while the other included them, the difference partly reflects the changed convention.

Record actual relevant race weight where possible. A catalog curb figure is not automatically the weight used for a pass. Likewise, estimated power is not a measured dyno value. The model cannot repair those uncertainties just because both entries are positive numbers.

## Why ET and trap speed need context

Elapsed time depends strongly on the launch and what happens through the entire pass. Trap speed is another recorded outcome, but it is not a pure engine-power measurement. Gearing, power delivery, conditions and the pass itself affect both.

If two passes have similar trap speed but different ET, examine launch and intermediate times before concluding power changed. That is a reason to inspect more evidence, not a diagnosis. A time slip contains more information than the two headline values, and the calculator cannot reconstruct it from power and weight.

## Record a real pass consistently

Keep date, venue, vehicle setup, weight convention, tire arrangement, weather or available track conditions, 60-foot time, intermediate times, ET and trap speed. Record power data with its source and measurement basis. Note substantive changes between passes.

One-variable comparisons are easier to interpret, but real testing rarely controls every variable perfectly. Do not attribute a single changed result entirely to the most recent part purchase without considering conditions and execution. Suitable legal, controlled facilities and their requirements govern actual testing.

## Do not reverse the formula into certainty

You can algebraically solve an empirical equation for horsepower. That does not turn a time slip into a verified dyno measurement. Reversal retains the original model assumptions, coefficient uncertainty and omitted variables.

GarageMath therefore does not present this estimator as an exact power inference tool. If power measurement is the question, use an appropriate measurement method and its own limitations. If performance comparison is the question, preserve the actual pass data instead of replacing it with a claimed horsepower figure.

## Common mistakes

- Calling the output a simulated pass.
- Mixing engine horsepower with wheel horsepower without qualification.
- Using inconsistent curb and operating weights.
- Interpreting hundredths of a second as accuracy.
- Applying linear percentage changes to a cube-root formula.
- Treating a discrepancy as proof of a mechanical fault.

Another mistake is using an extreme extrapolation because the tool accepts the numbers. Finite arithmetic does not establish a validated model range. A two-input empirical shortcut becomes less informative when omitted characteristics dominate the application.

## What the calculator still cannot see

It lacks launch traction, power curve, transmission shifts, aerodynamic drag, track surface and atmospheric effects. It cannot evaluate vehicle safety, component durability, track eligibility or driver execution. It does not predict whether the entered peak power is usable across the run.

These limitations do not make the arithmetic useless. They define its role: transparent screening and controlled scenario comparison. The result is valuable when the reader understands that role rather than treating a favorable number as an achievement already secured.

## Distinguish reaction time from elapsed time

A track’s reaction-time measurement and the elapsed time of a pass describe different intervals. Record the venue’s timing conventions when interpreting a slip. This estimator provides no reaction-time prediction and does not model a competitive finish between drivers. Do not add an assumed reaction time to its ET and then describe that sum as the same measurement.

The distinction illustrates a broader rule: use the definitions of the actual data being compared. Intermediate distances, trap-speed measurement and timing systems have their own conventions. Preserve the original slip rather than copying only two numbers into a spreadsheet. If a source changes its definition or unit, note that before making an apparent before-and-after performance claim. More recorded context makes the evidence useful even when the simple formula cannot explain the outcome.

## Decision checklist and related tools

Record a consistent power and operating-weight basis. Reproduce the baseline. Change one assumption and explain the equation response. Label outputs as estimates. Compare any real pass using its conditions and intermediate times. Keep unresolved differences as questions for investigation.

Use [Power-to-Weight](hp-weight.html) to inspect the underlying ratio and read [Power-to-Weight Explained](power-to-weight-guide.html) and [Gearing](gear-ratio-guide.html). All examples are original computations of the displayed coefficients. No vehicle-specific validation, promised result or public-road testing recommendation is implied.
