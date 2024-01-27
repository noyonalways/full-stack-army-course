import { useState } from "react";
import OperatorButton from "./operator-button";
import HistoryItem from "./history-item";
import InputField from "./input-field";

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

const operators = [
	{
		id: "001",
		name: "Add",
		symbol: "+",
	},
	{
		id: "002",
		name: "Minus",
		symbol: "-",
	},
	{
		id: "003",
		name: "Multiply",
		symbol: "*",
	},
	{
		id: "004",
		name: "Divide",
		symbol: "/",
	},
	{
		id: "005",
		name: "Modulus",
		symbol: "%",
	},
];

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
			<div>
				<h1 className="text-xl font-semibold mb-2">Result: {result}</h1>
				<div>
					<p className="font-medium text-lg mb-2">Inputs</p>
					<div className="space-y-2">
						<InputField
							type={"number"}
							value={inputState.a}
							name={"a"}
							handleInputChange={handleInputChange}
						/>
						<InputField
							type={"number"}
							value={inputState.b}
							name={"b"}
							handleInputChange={handleInputChange}
						/>
					</div>
				</div>
				<div>
					<p className="mb-2 text-lg font-medium">Operations</p>
					<div className="space-x-2 flex justify-center">
						{operators.map((operator) => (
							<OperatorButton
								handleArticmeticOps={handleArticmeticOps}
								key={operator.id}
								operator={operator}
							/>
						))}
						<button
							className="px-4 py-1 bg-red-400 hover:bg-red-500 text-white border active:scale-95 rounded"
							onClick={handleClearOps}
						>
							Clear
						</button>
					</div>
				</div>
				<div>
					<p className="my-2 text-lg font-medium">History</p>
					{histories.length === 0 ? (
						<p className="mb-2">There is no History</p>
					) : (
						<ul className="space-y-2">
							{histories.map((historyItem) => (
								<HistoryItem
									key={historyItem.id}
									historyItem={historyItem}
									restoredHistory={restoredHistory}
									handleRestoreBtn={handleRestoreBtn}
								/>
							))}
						</ul>
					)}
				</div>
			</div>
		</div>
	);
};

export default CalculationApp;
