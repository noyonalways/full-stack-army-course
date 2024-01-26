const TaskItem = ({ task }) => {
	return (
		<li className={`p-3 border border-gray-300`}>
			<div className="flex items-end space-x-1">
				<h3>{task.title}</h3>
				<small className="bg-gray-300 px-2 rounded-full">{task.status}</small>
			</div>
			{task.text}
		</li>
	);
};

export default TaskItem;
