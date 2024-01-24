import React, { useState } from "react";
import moment from "moment";

export default function SingleTodo({
	todo,
	number,
	updateTodo,
	deleteTodo,
	completeATodo,
}) {
	const [isEditing, setIsEditing] = useState(false);
	const [newTodoText, setNewTodoText] = useState(todo.text);

	const handleUpdateTodo = () => {
		setIsEditing(true);
	};

	const handleCancelUpdate = () => {
		setIsEditing(false);
		setNewTodoText(todo.text);
	};

	const handleSaveUpdate = () => {
		console.log("Saving update:", newTodoText);
		updateTodo(newTodoText);
		setIsEditing(false);
	};

	const handleChange = (e) => {
		setNewTodoText(e.target.value);
	};

	return (
		<li>
			<div className="flex items-center justify-between px-4 bg-slate-200 py-3 rounded duration-200">
				<div className="flex items-center space-x-3">
					<span>{number}</span>
					<input
						className="size-4"
						type="checkbox"
						name="completeTodo"
						id="completeTodo"
						onChange={() => completeATodo(todo.id)}
					/>
				</div>
				{isEditing ? (
					<div>
						<input
							type="text"
							value={newTodoText}
							onChange={handleChange}
							className="border rounded px-2 py-1"
						/>
						<button
							onClick={handleSaveUpdate}
							className="px-2 py-1 bg-green-400 rounded text-white ml-2"
						>
							Save
						</button>
						<button
							onClick={handleCancelUpdate}
							className="px-2 py-1 bg-gray-400 rounded text-white ml-2"
						>
							Cancel
						</button>
					</div>
				) : (
					<div>{todo.text}</div>
				)}
				<div>
					{todo.isCompleted ? (
						<p className="">Completed</p>
					) : (
						<p className="">Running</p>
					)}
				</div>
				<div>{moment(todo.createdAt).format("YYYY-MM-DD h:mm:ss A")}</div>
				<div className="space-x-2">
					<button
						onClick={handleUpdateTodo}
						className="px-3 py-1 bg-blue-400 rounded text-white"
					>
						Update
					</button>
					<button
						onClick={() => deleteTodo(todo.id)}
						className="px-3 py-1 bg-red-400 rounded text-white"
					>
						Delete
					</button>
				</div>
			</div>
		</li>
	);
}
