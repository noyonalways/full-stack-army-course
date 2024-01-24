import SingleTodo from "./single-todo";

export default function ShowTodos({
	todos,
	updateTodo,
	deleteTodo,
	completeATodo,
}) {
	return (
		<div>
			{todos.length > 0 ? (
				<ul className="flex flex-col mt-3 gap-y-2">
					{todos.map((todo, index) => (
						<SingleTodo
							updateTodo={updateTodo}
							deleteTodo={deleteTodo}
							completeATodo={completeATodo}
							number={index + 1}
							todo={todo}
							key={todo.id}
						/>
					))}
				</ul>
			) : (
				<h3 className="text-xl text-center mt-3">No todo found!</h3>
			)}
		</div>
	);
}
