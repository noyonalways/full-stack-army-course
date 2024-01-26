const CommentItem = ({ comment }) => {
	return (
		<div className="">
			<h3 className="text-xl font-bold">{comment.user.name}</h3>
			<p>{comment.text}</p>
		</div>
	);
};

export default CommentItem;
