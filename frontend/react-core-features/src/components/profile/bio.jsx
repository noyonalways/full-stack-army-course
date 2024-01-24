import PropTypes from "prop-types";

/**
 *
 * @param {{name: string, title: string}} bio
 * @returns {JSX.Element}
 */
export default function Bio({ bio }) {
	return (
		<div>
			<h1 className="text-2xl font-bold">{bio?.name || "Your name"}</h1>
			<p className="text-gray-500">{bio?.title || "Your profession titile"}</p>
		</div>
	);
}
Bio.propTypes = {
	bio: PropTypes.shape({
		name: PropTypes.string,
		title: PropTypes.string,
	}),
};
