const TaskItem = ({ task }) => {
	return (
		<li className={`p-3 border-b border-b-gray-300`}>
			<div className="flex items-end space-x-1">
				<h3 className="font-medium text-lg">{task.title}</h3>
				<small className="bg-gray-300 px-2 rounded-full">{task.status}</small>
			</div>
			{task.text}
		</li>
	);
};

export default TaskItem;
