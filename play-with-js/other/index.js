// map, filter, reduce

const numbers = [1, 2, 3, 4, 5, false, "", NaN, 6];

/**
 * Map -> [same laength as the original array]
 * Filter -> [with filtered item]
 * Reduce -> Know one knows (Only you know) all possible value
 */

const result = numbers.reduce(function (acc, cur, index) {
	if (cur) {
		acc[cur] = {value: cur};
	}
	return acc;
}, {});

console.log(result);
