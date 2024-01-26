const CommentItem = ({ comment }) => {
	return (
		<div>
			<h3 className="text">{comment.user.name}</h3>
			<p>{comment.text}</p>
		</div>
	);
};

export default CommentItem;
