import CommentItem from "../comment-item";
import TagItem from "../tag-item";
import TaskItem from "../task-item";

const Todo = ({ todo, getFormatedDate, getDay }) => {
	return (
		<div className="bg-slate-200 p-3 rounded">
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
	);
};

export default Todo;
