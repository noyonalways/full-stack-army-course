// import ProductList from "./components/product-list";
// import Todos from "./components/todos";

import { useState } from "react";

// const App = () => {
// 	return (
// 		<>
// 			{/* <ProductList /> */}
// 			<Todos />
// 		</>
// 	);
// };

// export default App;

/**
 * DONE: Handle user input fileds
 * DONE: Handle operations
 * TODO: Handle a list of histories
 * TODO: Render history
 * TODO: Restore the history
 */

const initialInputState = {
	a: 0,
	b: 0,
};

const App = () => {
	const [inputState, setInputState] = useState({ ...initialInputState });
	const [result, setResult] = useState(0);
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
		const f = new Function(
			`operator`,
			`return ${inputState.a} ${operator} ${inputState.b}`
		);

		setResult(f(operator));

		// setResult(eval(`${inputState.a} ${operator} ${inputState.b}`));
	};

	// approach 2
	// const handleFieldA  = (e) => {
	// 	setInputState({
	// 		...inputState,
	// 		a: Number(e.target.value)
	// 	})
	// }
	// const handleFieldB  = (e) => {
	// 	setInputState({
	// 		...inputState,
	// 		b: Number(e.target.value)
	// 	})
	// }

	// approach 3
	// const hangleInputFields = (key, value) => {
	// 	setInputState({
	// 		...inputState,
	// 		[key]: value,
	// 	});
	// };

	// approach 4
	// const hangleInputFields = (newInputState) => {
	// 	setInputState({
	// 		...inputState, // previous state
	// 		...newInputState, // new state
	// 	});
	// };

	console.log(inputState);

	return (
		<div className="max-w-xl mx-auto bg-slate-100 p-5">
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
					className="px-1 bg-gray-200 border mr-1 py-0"
					onClick={handleClearOps}
				>
					Clear
				</button>
			</div>
			<div>
				<p className="mb-2 text-lg font-medium">History</p>
				<p>
					<small>There is no History</small>
				</p>
			</div>
		</div>
	);
};

export default App;
