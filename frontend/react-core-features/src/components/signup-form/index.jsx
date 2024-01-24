import { Component } from "react";

class SignupForm extends Component {
	state = {
		values: {
			name: '',
            email: '',
            password: '',
            gender: ""
		},
        agreement: false,

	};
	render() {
		return <div></div>;
	}
}

export default SignupForm;
