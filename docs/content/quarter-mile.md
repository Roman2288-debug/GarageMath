# quarter-mile

Canonical: https://garagemath.com/quarter-mile

## How this empirical estimate works

This tool uses fixed-coefficient cube-root relationships between entered horsepower and weight. It is an empirical shortcut, not a simulation of a pass.

```text
estimated elapsed time, seconds = 5.825 × cube root(weight lb ÷ hp)
estimated trap speed, mph = 234 × cube root(hp ÷ weight lb)
```

The coefficients are part of the displayed model and depend on its units and convention. GarageMath does not provide a validated fleet calibration or uncertainty interval for them. We retain them as transparent screening equations, not a claim that every vehicle follows them.

Use a consistently stated power basis and actual operating weight when comparing scenarios. The estimator does not convert engine horsepower to wheel horsepower. Different empirical models can use different coefficients and conventions; their results should not be blended as if identical.

## Worked example 1: 350 hp and 3,500 lb

```text
weight per hp = 3,500 ÷ 350 = 10 lb/hp
ET = 5.825 × cube root(10) = 12.55 seconds
trap = 234 × cube root(0.10) = 108.61 mph
```

These numbers describe the formula’s response. They are not a promised time slip. A vehicle with poor launch traction can have a materially different elapsed time even when a simple ratio looks favorable.

## Worked example 2: change power, hold weight fixed

At **400 hp and 3,500 lb**, the same equations give **12.00 seconds** and **113.56 mph**.

```text
ET difference = 12.55 − 12.00 ≈ 0.55 second
trap difference = 113.56 − 108.61 ≈ 4.94 mph
```

The proposed power gain is 14.3%, but the output does not change by 14.3% because the relationship uses cube roots. Neither difference accounts for launch, shifts, gearing or conditions.

## What the result means at the track

Use it to compare the direction and approximate scale of a change within one stated model. Keep the same power basis, weight convention and equation. When reviewing actual passes, record race weight, weather, tires, 60-foot time, intermediate times, elapsed time and trap speed.

Elapsed time and trap speed reflect different aspects of a pass, but neither isolates engine power. A changed launch can alter ET without establishing a matching power change. Avoid converting one slip into a claimed dyno result without an appropriate model and evidence.

## What this calculator cannot prove

It does not model traction, aerodynamic drag, shift time, power curve, track preparation, weather or driver behavior. It has no vehicle-specific validation range. Extreme inputs can yield mathematically finite but practically unhelpful results.

It cannot establish safety, track eligibility or public-road performance. Use legal, controlled facilities and their requirements for actual testing. The estimate is not an instruction to attempt an entered speed.

## Before interpreting a comparison

1. State the power measurement basis and uncertainty.
2. Use consistent operating weight including relevant occupants and fuel.
3. Change one assumption at a time where possible.
4. Label outputs as estimates from this particular equation.
5. Compare real slips with conditions and intermediate times attached.
6. Do not treat a discrepancy as proof of an engine fault.

## Frequently asked questions

### Is this a simulated pass?

No. Only power and weight enter the equations. The tool does not integrate acceleration or model launches and gear changes.

### Which horsepower should I use?

Record the basis you use and keep comparisons consistent. The calculator does not establish a universal conversion between engine and wheel output or a validated coefficient calibration for both.

### Why does my real ET differ?

The model omits many determinants, especially launch and shift behavior. Input uncertainty and coefficient applicability also matter. The difference alone does not identify a mechanical problem.

### Can trap speed reveal exact horsepower?

Not through this tool. Algebraically reversing an empirical equation retains its assumptions and uncertainty. It is not a replacement for measured output.

### Does 10% more power mean 10% less ET?

No. The cube-root relationship responds more slowly than a linear rule. Compare the actual equations rather than applying a proportional shortcut.

### Can equal power-to-weight vehicles run differently?

Yes. They can differ in traction, gearing, power delivery and aerodynamic load. A shared input ratio does not make their passes equivalent.

### Why does the tool show hundredths of a second?

That is display resolution, not claimed accuracy. Treat the decimal places as a reproducible formula output rather than a confidence statement about the track result.

## Related guides

Read [Quarter-Mile Estimates](quarter-mile-guide.html), [Power-to-Weight](power-to-weight-guide.html), and [Gearing](gear-ratio-guide.html). Use [Power-to-Weight calculator](hp-weight.html) to audit the underlying ratio. Model coefficients are disclosed; vehicle-specific approval and predictive accuracy are not claimed.
