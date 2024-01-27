import { useState } from "react";

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
		<div className="max-w-xl mx-auto bg-slate-100 p-5 my-10 rounded-md shadow">
			<h1 className="text-xl font-bold mb-2">Result: {result}</h1>
			<div>
				<p className="font-medium text-lg mb-2">Inputs</p>
				<input
					className="border block"
					type="number"
					value={inputState.a}
					name="a"
					onChange={handleInputChange}
					// onChange={handleFieldA}
					// onChange={(e) => hangleInputFields("a", e.target.value)}
					// onChange={(e) => hangleInputFields({ a: Number(e.target.value) })}
				/>
				<input
					className="border block"
					type="number"
					value={inputState.b}
					name="b"
					onChange={handleInputChange}
					// onChange={handleFieldB}
					// onChange={(e) => hangleInputFields("b", e.target.value)}
					// onChange={(e) => hangleInputFields({ b: Number(e.target.value) })}
				/>
			</div>
			<div>
				<p className="mb-2 text-lg font-medium">Operations</p>
				<button
					onClick={() => handleArticmeticOps("+")}
					className="px-1 bg-gray-200 border mr-1 py-0"
				>
					+
				</button>
				<button
					onClick={() => handleArticmeticOps("-")}
					className="px-1 bg-gray-200 border mr-1 py-0"
				>
					-
				</button>
				<button
					onClick={() => handleArticmeticOps("*")}
					className="px-1 bg-gray-200 border mr-1 py-0"
				>
					*
				</button>
				<button
					onClick={() => handleArticmeticOps("/")}
					className="px-1 bg-gray-200 border mr-1 py-0"
				>
					/
				</button>
				<button
					onClick={() => handleArticmeticOps("%")}
					className="px-1 bg-gray-200 border mr-1 py-0"
				>
					%
				</button>
				<button
					className="px-2 bg-gray-200 border mr-1 py-0 active:scale-95 rounded"
					onClick={handleClearOps}
				>
					Clear
				</button>
			</div>
			<div>
				<p className="my-2 text-lg font-medium">History</p>
				{histories.length === 0 ? (
					<p className="mb-2">There is no History</p>
				) : (
					<ul className="space-y-2">
						{histories.map((historyItem) => (
							<li
								className="bg-slate-300 rounded p-2 space-y-1"
								key={historyItem.id}
							>
								<div className="flex space-x-2">
									<span className="font-medium">Operaiton:</span>
									<div className="flex space-x-1">
										<div className="flex items-center space-x-1">
											<span>{historyItem.inputs.a}</span>
											<span>{historyItem.operator}</span>
											<span>{historyItem.inputs.b}</span>
										</div>
										<p className="flex space-x-1">
											<span className="font-medium">Result:</span>
											<span>{historyItem.result}</span>
										</p>
									</div>
								</div>
								<div className="flex items-center space-x-2">
									<div className="space-x-2">
										<span>{historyItem.date.toLocaleTimeString()}</span>
										<span>{historyItem.date.toLocaleDateString()}</span>
									</div>
									<button
										disabled={
											restoredHistory !== null &&
											restoredHistory.id === historyItem.id
										}
										onClick={() => handleRestoreBtn(historyItem)}
										className={`px-3 bg-green-400 text-white rounded active:scale-95 disabled:bg-blue-400`}
									>
										Restore
									</button>
								</div>
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default CalculationApp;
