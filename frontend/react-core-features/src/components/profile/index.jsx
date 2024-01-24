import { Component } from "react";
import PropTypes from "prop-types";
import Bio from "./bio";
import Skills from "./skills";
import Links from "./links";

class Profile extends Component {
	bio = {
		name: "Noyon Rahman",
		title: "Web Developer, Tech Lover, Learner",
	};
	skills = ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"];
	links = [
		{
			name: "Facebook",
			url: "https://facebook.com/noyonalways",
		},
		{
			name: "YouTube",
			url: "https://youtube.com/@deskofnoyon",
		},
	];

	render() {
		return (
			<div className="bg-slate-100 p-4 rounded-md max-w-lg space-y-3 shadow-md">
				<Bio bio={this.props.bio || this.bio} />
				<Skills skills={this.props.skills || this.skills} />
				<Links links={this.props.links || this.links} />
			</div>
		);
	}
}

Profile.propTypes = {
	bio: PropTypes.shape({
		name: PropTypes.string,
		title: PropTypes.string,
		// Add more specific prop types for the bio object if needed
	}),
	skills: PropTypes.arrayOf(PropTypes.string),
	links: PropTypes.arrayOf(
		PropTypes.shape({
			url: PropTypes.string,
			name: PropTypes.string,
		})
	),
};

export default Profile;
