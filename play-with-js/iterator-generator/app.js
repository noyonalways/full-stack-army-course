/* // 1, 2, 2, 3, 4, 5

const range = {
	start: 0,
	stop: 100,
	step: 5,
};

range[Symbol.iterator] = function () {
	let current = this.start;
	let stop = this.stop;
	let step = this.step;

	return {
		next() {
			const o = {
				value: current,
				done: current > stop,
			};
			current += step;
			return o;
		},
	};
};


for (const v of range) {
    console.log(v);
} */



/* function* myGenerator() {
    yield 1;
    yield 2;
    yield 3
}

const iterator = myGenerator();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next()); */

/* function* range(start =0, stop = 100, step =5){
    for(let i = start; i <= stop; i += step){
        yield i
    }
}

const rangeIt = range(1, 10, 3)
console.log(rangeIt.next());
console.log(rangeIt.next());
console.log(rangeIt.next());
console.log(rangeIt.next()); */