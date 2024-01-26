const TagItem = ({ tag }) => {
	return (
		<li className={`p-2 border border-blue-200 flex items-center space-x-2`}>
			<small className=" flex items-center justify-center bg-gray-400 size-8 rounded-full">
				{tag.icon}
			</small>
			<p>{tag.text}</p>
		</li>
	);
};

export default TagItem;
