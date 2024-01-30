import { useState } from "react";
import InputSection from "./inputs-section";
import OperationsSection from "./operations-section";
import HistorySection from "./history-section";

function* generateId() {
  let id = 0;
  while (true) {
    yield id++;
  }
}
const getId = generateId();

const initialInputState = {
  a: 0,
  b: 0,
};

/**
 * Todo
 * DONE: Handle user input fileds
 * DONE: Handle operations
 * DONE: Handle a list of histories
 * DONE: Render history
 * DONE: Restore the history
 */

const CalculationApp = () => {
  const [inputState, setInputState] = useState({ ...initialInputState });
  const [result, setResult] = useState(0);
  const [histories, setHistories] = useState([]);
  const [restoredHistory, setRestoredHistory] = useState(null);
  // approach 1
  const handleInputChange = (event) => {
    setInputState({
      ...inputState,
      [event.target.name]: Number(event.target.value),
    });
  };

  const handleClearOps = () => {
    setInputState({ ...initialInputState });
    setResult(0);
  };

  const handleArticmeticOps = (operator) => {
    if (!inputState.a || !inputState.b) {
      alert("Invalid Input");
      return;
    }

    // create a dynamic function based on the input operations
    const f = new Function(
      `operator`,
      `return ${inputState.a} ${operator} ${inputState.b}`
    );

    const result = f(operator);
    setResult(result);

    // do the same thing as the the dynamic function
    // setResult(eval(`${inputState.a} ${operator} ${inputState.b}`));

    const historyItem = {
      id: getId.next().value,
      inputs: { ...inputState },
      operator,
      result,
      date: new Date(),
    };
    setHistories([historyItem, ...histories]);
  };

  const handleRestoreBtn = (historyItem) => {
    setInputState({ ...historyItem.inputs });
    setResult(historyItem.result);
    setRestoredHistory(historyItem);
  };

  /* 
	// approach 2
	const handleFieldA  = (e) => {
		setInputState({
			...inputState,
			a: Number(e.target.value)
		})
	}
	const handleFieldB  = (e) => {
		setInputState({
			...inputState,
			b: Number(e.target.value)
		})
	}

	// approach 3
	const hangleInputFields = (key, value) => {
		setInputState({
			...inputState,
			[key]: value,
		});
	};

	// approach 4
	const hangleInputFields = (newInputState) => {
		setInputState({
			...inputState, // previous state
			...newInputState, // new state
		});
	}; */

  return (
    <div className="max-w-md mx-auto bg-slate-100 p-5 my-10 rounded-md shadow">
      <h1 className="text-2xl font-bold text-center mb-3">Calculation App</h1>
      <div className="">
        <h1 className="text-xl font-semibold mb-2">Result: {result}</h1>
        <InputSection
          inputs={inputState}
          handleInputChange={handleInputChange}
        />
        <OperationsSection
          handleClearOps={handleClearOps}
          handleArticmeticOps={handleArticmeticOps}
        />
        <HistorySection
          histories={histories}
          restoredHistory={restoredHistory}
          handleRestoreBtn={handleRestoreBtn}
        />
      </div>
    </div>
  );
};

export default CalculationApp;
