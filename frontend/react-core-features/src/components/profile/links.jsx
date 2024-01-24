import PropTypes from "prop-types";

/**
 *
 * @param {[{name: string, url: string}]} links
 * @returns
 */
export default function Links({ links }) {
	return (
		<div>
			<h3 className="text-xl font-semibold mb-2">Social Links:</h3>
			<ul className="flex justify-center space-x-3">
				{links &&
					links.map((link, index) => (
						<li key={index + 2}>
							<a className="hover:underline" target="_blank" rel="noreferrer" href={link?.url}>
								{link?.name}
							</a>
						</li>
					))}
			</ul>
		</div>
	);
}

Links.propTypes = {
	links: PropTypes.arrayOf(
		PropTypes.shape({
			url: PropTypes.string,
			name: PropTypes.string,
		})
	),
};
