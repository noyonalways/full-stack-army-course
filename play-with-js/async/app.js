const axios = require("axios").default;

async function getUser() {
	const { data: users } = await axios.get(
		`https://jsonplaceholder.typicode.com/users`
	);
	console.log(users);
}

getUser();
