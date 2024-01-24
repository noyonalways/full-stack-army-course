const arr = [1, 2, 3, null, false, 4, 5, "", "test", 6, 7];

// imperative way to fileter the numbers only

let count = 0;
for (let i = 0; i < arr.length; i++) {
	for (let j = i; j < arr.length - 1; j++) {
		if (typeof arr[j] !== "number") {
			arr[j] = arr[j + 1];
			arr[j + 1] = undefined;
		}
	}

	if (arr[i] === undefined) {
		count++;
	}
}



arr.length = arr.length - count;
console.log(arr);

// declaraive way to filter number only
const filteredArray = arr.filter((v) => typeof v === "number");
console.log("declarative way:", filteredArray);
