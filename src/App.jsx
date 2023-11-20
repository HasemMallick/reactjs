import React from "react";

// button component imported at the top
import ButtonComp from "./components/ButtonComp.jsx";

// imported react useState() hook for the counter state update & management
import { useState } from "react";

export default function App() {
  const [counterValue, setConterValue] = useState(0);

  // Method to add value and update current value
  const addCounterValue = () => setConterValue(counterValue + 10);

  // Method to remove value and update current value
  const removeCounterValue = () => setConterValue(counterValue - 10);

  return (
    <>
      <div className="h-screen bg-slate-700 ">
        <div className="text-4xl text-center text-slate-200">
          The is counter application
        </div>

        {/* button for the counter application 
                ButtonComp is component for the button that accecept props as the btnName  & btnMethod
            */}

        <div className="text-center align-center text-slate-300 text-2xl">
          Current Value is
          <span className="text-8xl">{counterValue}</span>
        </div>

        <div className="text-center">
          <ButtonComp btnName="Add" btnMethod={addCounterValue} />
          <ButtonComp btnName="Remove" btnMethod={removeCounterValue} />
        </div>
      </div>
    </>
  );
}
