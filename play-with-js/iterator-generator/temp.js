function calculateSum(arr) {
	return arr.reduce((acc, curr) => {
		return acc + curr;
	}, 0);
}
