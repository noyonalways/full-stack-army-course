import { useState } from "react";
const formFields = {
	name: {
		type: "text",
		label: "What is your name?",
		placeholder: "Enter your name",
	},
	email: {
		type: "email",
		label: "What is your email?",
		placeholder: "Enter your email",
	},
	phone: {
		type: "tel",
		label: "What is your phone?",
		placeholder: "Enter your phone number",
	},
	password: {
		type: "password",
		label: "What is your password?",
		placeholder: "Enter your password",
	},
	dateOfBirth: {
		type: "date",
		label: "What is your date of birth?",
		placeholder: "Enter your date of birth",
	},
	color: {
		type: "color",
		label: "What is your favorite color?",
		placeholder: "Enter your favorite color",
	},
};

const transformObject = (obj) => {
	return Object.keys(obj).reduce((acc, cur) => {
		acc[cur] = {
			...obj[cur],
			value: "",
		};
		return acc;
	}, {});
};

const mapObjToArray = (obj) => {
	return Object.keys(obj).map((key) => ({ name: key, ...obj[key] }));
};

const DynamicForm = () => {
	const [formState, setFormState] = useState(transformObject(formFields));
	const formData = mapObjToArray(formState);

	const handleSubmit = (event) => {
		event.preventDefault();
		const values = Object.keys(formState).reduce((acc, cur) => {
			acc[cur] = formState[cur].value;
			return acc;
		}, {});

		console.log(values);
	};

	const handleChange = (event) => {
		setFormState({
			...formState,
			[event.target.name]: {
				...formState[event.target.name],
				value: event.target.value,
			},
		});
	};

	return (
		<div className="bg-white">
			<div className="w-full lg:max-w-lg mx-auto p-5 rounded-md shadow-md bg-slate-50 my-8">
				<h2 className="text-2xl mb-3 font-semibold text-center">
					Resigter Form
				</h2>
				<form onSubmit={handleSubmit} className="space-y-4">
					{formData.map((item, index) => (
						<div className="flex flex-col space-y-1" key={index + 2}>
							<label htmlFor={item.name}>{item.label}</label>
							<input
								className={`py-2 px-3 rounded ${
									item.type === "color" &&
									"w-full h-10 py-0 px-0 rounded overflow-hidden"
								}`}
								type={item.type}
								placeholder={item.placeholder}
								name={item.name}
								id={item.name}
								value={item.value}
								onChange={handleChange}
							/>
						</div>
					))}
					<button
						className="mb-2 px-5 py-2 rounded shadow hover:shadow-md bg-green-400 text-white active:scale-95 duration-200 w-full"
						type="submit"
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default DynamicForm;
