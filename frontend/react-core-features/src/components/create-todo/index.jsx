import { useState } from "react";

export default function CreateTodo({ addNewTodo }) {
	const [text, setText] = useState("");

	const taskSubmitHandler = (e) => {
		e.preventDefault();

		if (!text) {
			return;
		}
		addNewTodo(text);
		setText("");
	};

	return (
		<div className="bg-gray-300 w-full p-3 flex items-center justify-center">
			<form
				className="max-w-sm w-full flex items-center justify-between"
				onSubmit={taskSubmitHandler}
			>
				<input
					type="text"
					placeholder="Add a new todo"
					className="px-3 py-1 rounded-l w-full"
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
				<input
					type="submit"
					value="Add Todo"
					className="px-3 py-1 bg-green-400 text-white rounded-r active:scale-95 duration-200"
				/>
			</form>
		</div>
	);
}
