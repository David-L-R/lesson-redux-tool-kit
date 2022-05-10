# Redux Challenge - Flying an airplane

You have a dashboard of a plane (`Dashboard.jsx`).

The different elements of the dashboard are in

- `Engine.jsx` - controlling the 4 engines. Engines can be working or not (false / true)
- `Navigator.jsx` - controlling the navigation system. This can be controlled manually, by the auto-pilot or remotely.
- `Thrust.jsx` - this controls the amount of power you give the engines (0-100 per engine)

All functionality should be controlled using only the components, the plane's slice and the plane's selector.

You don't need to add new components, reducers (slices) or selectors! You should only add functionality inside them.

## Feature 1 - Dashboard should be interactive

1. Add functions to set the engines on and off by pressing their buttons. In each engine we should have a feedback if it is on or off (for example, edit the text of the button to show `Engine right OFF` and `Engine right ON`)

2. Changing the options in the navigator should change the status in the navigation part of the redux state.

3. Changing the thrust should change the values in the reducer (redux state). Thrust should go between 0-100. Trust only goes up and down by 10 (10, 20, 30...)

## Feature 2 (ADVANCED) - Calculating total power

In order to calculate the total power consumed by the plane, we need to:

1. Multiply each engine by the thrust. So if the thrust is 80 and we have 2 engines working, the total power consumed by the engines will be 160.

2. Each Navigation system consumes different power. Manual navigation does not consumes anything. Auto pilot consumes 50 and remote consumes Thrust \* 2. So if we use remote and have a thrust of 100, the power consumed by the navigation system will be 200.

## Feature 3 (NINJA) - Preventing exceeding power supply

The maximum safe power consumption of the plane at any given moment is 300.

If we reached it, we should block the pilot from adding any additional power.

For example, if:

- 3 engines are on
- thrust is 90
- navigation is manual
- total power is 270

The pilot should not

- be able to activate another engine
- navigation should not be changed (cause it will exceed)
