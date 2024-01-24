const operations = [
	{
		args: [10, 20],
		params: ["a", "b"],
		body: 'console.log("a+b=", a+b)',
	},
	{
		args: [10, 20],
		params: ["a", "b"],
		body: 'console.log("a-b=", a-b)',
	},
	{
		args: [10, 20],
		params: ["a", "b"],
		body: 'console.log("a*b=", a*b)',
	},
	{
		args: [],
		params: [],
		body: 'console.log("No params, no args")',
	},
];

operations.forEach((operation) => {
	const fn = new Function(...operation.params, operation.body);
	fn(...operation.args);
});
