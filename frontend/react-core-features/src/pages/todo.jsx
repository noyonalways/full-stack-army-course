import { useState } from "react";
import CreateTodo from "../components/create-todo";
import TodoLayout from "../layouts/todo-layout";
import shortid from "shortid";
import ShowTodos from "../components/show-todos";
import CompletedTodos from "../components/completed-todos";

export default function Todo() {
	const [todos, setTodos] = useState([]);
	const addNewTodo = (newTodoText) => {
		const todo = {
			text: newTodoText,
			isCompleted: false,
			createdAt: new Date(),
			id: shortid.generate(),
		};

		setTodos([todo, ...todos]);
	};

	// Parent component or state management system
	const updateTodo = (todoId, newText) => {
		setTodos((prevTodos) =>
			prevTodos.map((t) => (t.id === todoId ? { ...t, text: newText } : t))
		);
	};

	const deleteTodo = (todoId) => {
		setTodos(todos.filter((todo) => todo.id !== todoId));
	};

	const completeATodo = (todoId) => {
		setTodos(
			todos.map((todo) =>
				todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo
			)
		);
	};
	return (
		<TodoLayout>
			<CreateTodo addNewTodo={addNewTodo} />
			<ShowTodos
				deleteTodo={deleteTodo}
				updateTodo={updateTodo}
				completeATodo={completeATodo}
				todos={todos}
			/>
			<CompletedTodos todos={todos} />
		</TodoLayout>
	);
}
