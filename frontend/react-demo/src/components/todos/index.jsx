import fetchData from "../../utils/fetch-data";
import CommentItem from "./comment-item";
import TagItem from "./tag-item";
import TaskItem from "./task-item";

const todo = await fetchData("/task.json");

function getDay(dateStr) {
	const date = new Date(dateStr).getDay();
	const days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Satuarday",
	];
	return days[date];
}

function getFormatedDate(dateStr) {
	const date = new Date(dateStr);
	return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

const Todos = () => {
	return (
		<div>
			<div className="container mx-auto">
				<div className="lg:max-w-4xl lg:mx-auto bg-slate-200 p-3">
					<h2 className="text-xl font-bold mb-5">
						{getDay(todo.createdAt)} {getFormatedDate(todo.createdAt)}
					</h2>
					<ul>
						{todo.tags.map((tag) => (
							<TagItem tag={tag} key={tag.id} />
						))}
					</ul>
					<p className="my-1 font-medium">Notes Linked to People</p>
					<div>
						{todo.comments.map((comment) => (
							<CommentItem key={comment.id} comment={comment} />
						))}
					</div>
					<ul className="mt-6">
						{todo.tasks.map((task) => (
							<TaskItem key={task.id} task={task} />
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Todos;
