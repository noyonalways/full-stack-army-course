import PropTypes from "prop-types";

/**
 *
 * @param {[string]} skills
 * @returns {JSX.Element}
 */
export default function Skills({ skills }) {
	
	return (
		<div>
			<h3 className="text-xl font-semibold mb-2">Skills:</h3>
			<ul className="flex space-x-3">
				{skills &&
					skills.map((skill, index) => (
						<li className="bg-gray-200 py-1 px-3 rounded" key={index + 1}>
							{skill}
						</li>
					))}
			</ul>
		</div>
	);
}

Skills.propTypes = {
	skills: PropTypes.arrayOf(PropTypes.string),
};
