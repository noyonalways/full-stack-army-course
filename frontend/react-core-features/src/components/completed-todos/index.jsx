import moment from "moment";

export default function CompletedTodos({ todos }) {
	return (
		<div>
			<h2 className="text-2xl my-5">Completed todos</h2>
			<div className="space-y-2">
				{todos.map(
					(todo) =>
						todo.isCompleted && (
							<div
								className="px-4 py-3 bg-gray-200 rounded flex items-center justify-between"
								key={todo.id}
							>
								{todo.text}
								{todo.isCompleted && (
									<p className="flex space-x-2">
										<span className="font-semibold">Status</span>
										<span>Completed</span>
									</p>
								)}
								<p className="flex space-x-2">
									<span className="font-semibold">Creatd at:</span>
									<span>
										{moment(todo.createdAt).format("YYYY-MM-DD h:mm:ss A")}
									</span>
								</p>
							</div>
						)
				)}
			</div>
		</div>
	);
}
