# injector-size

Canonical: https://garagemath.com/injector-size

## How injector planning math works

Brake-specific fuel consumption, or BSFC, relates engine output to fuel mass used per hour. Here it is entered in **lb/(hp·hour)**. With an engine-horsepower input, multiplying by BSFC gives an assumed full-load fuel mass demand.

```text
total fuel mass flow, lb/hr = engine hp × BSFC
required static flow per injector = total flow ÷ (injector count × duty fraction)
duty fraction = entered percentage ÷ 100
approximate gasoline cc/min = lb/hr × 10.5
```

The last conversion assumes a gasoline-like density. It is not universal for different fuels or temperatures. The model assumes identical injectors sharing demand at the entered maximum duty. It does not model staged injection or direct-injection timing windows.

## Worked example 1: 400 hp and eight injectors

Use **400 engine hp**, assumed **0.50 BSFC**, **eight injectors**, and **80% duty**.

```text
total demand = 400 × 0.50 = 200 lb/hr
per injector = 200 ÷ (8 × 0.80) = 31.25 lb/hr
approximate gasoline volume = 31.25 × 10.5 = 328 cc/min
```

The result is a planning minimum under those assumptions. It does not approve a nominal “330 cc” injector, especially without its rating pressure and characterization data.

## Worked example 2: same power, different assumptions

At the same 400 hp and eight injectors, assume **0.65 BSFC** and **75% duty**:

```text
total demand = 400 × 0.65 = 260 lb/hr
per injector = 260 ÷ (8 × 0.75) = 43.33 lb/hr
approximate gasoline volume = 43.33 × 10.5 = 455 cc/min
```

The flow requirement is about 38.7% higher without any power increase. These are illustrative assumptions, not prescribed BSFC or duty settings for your engine. Selecting optimistic inputs can make an undersized component look sufficient.

## What the result means in the fuel system

The result translates a stated power and fuel-use assumption into injector flow. Match the horsepower basis to the BSFC basis. Wheel horsepower is not engine horsepower; the calculator does not apply a hidden drivetrain-loss percentage.

Injector ratings depend on pressure differential across the injector, fuel and test conditions. Rail gauge pressure alone does not necessarily describe that differential when manifold pressure changes. Use the exact manufacturer flow and calibration data with the tuner’s requirements.

## What this calculator cannot prove

It cannot verify rail pressure under load, pump delivery, wiring voltage, regulator behavior, filter restrictions, fuel compatibility, connector fit or ECU control. It does not predict idle quality or minimum controllable pulse width. Two injectors with similar static flow can require different calibration data.

Its approximate volume conversion is not a fuel-specific specification. A duty value accepted mathematically is not automatically an appropriate operating limit. The tool also cannot infer a sound BSFC from engine displacement, induction type or a horsepower claim alone.

## Before you buy injectors

1. Record engine-power basis and the source of the target.
2. Establish fuel and defensible BSFC/duty assumptions with the tuner.
3. Compare at least two plausible demand scenarios.
4. Verify exact injector flow at the relevant differential pressure.
5. Confirm characterization, fit and ECU compatibility.
6. Assess the complete supply system at operating conditions.

## Frequently asked questions

### Can I enter wheel horsepower?

Only if the fuel-consumption basis is consistent and explicitly understood. Conventional engine BSFC uses engine output. Do not mix wheel power with engine-based assumptions or add an arbitrary hidden correction.

### Is 80% duty a guaranteed safe limit?

No. It is an example input. Injector, controller and application requirements differ. Confirm appropriate limits with the manufacturer and tuner.

### Is cc/min always lb/hr times 10.5?

No. Mass-to-volume conversion depends on fuel density and conditions. The displayed conversion is approximate for gasoline-like fuel; select hardware from actual manufacturer ratings.

### Can more pressure replace larger injectors?

Pressure changes can affect flow, but also pump delivery and injector operation. This tool does not evaluate that tradeoff. Obtain flow curves and system data rather than assuming extra rail pressure is free capacity.

### Why does a different BSFC change the result so much?

Fuel demand scales directly with BSFC. It describes the assumed fuel mass needed per unit of output. Uncertainty in that assumption directly changes the planning requirement.

### Does sufficient injector flow prove the pump is sufficient?

No. Pump delivery depends on operating pressure, voltage and the supply arrangement. Injector capacity cannot compensate for falling fuel pressure.

### Will a larger injector necessarily idle badly?

Static flow alone cannot answer that. Characterization and controllability matter. Verify suitable injector data and calibration rather than treating flow size as the only quality measure.

## Related guide and sources

Read [Injector Planning vs Reality](injector-planning-guide.html). [DeatschWerks characterization data](https://deatschwerks.com/pages/search-characterization-summaries) illustrates why exact part data matters. [DeatschWerks’ calculator](https://deatschwerks.com/pages/fuel-injector-calculator) is a manufacturer planning reference; our worked numbers are independently calculated.
