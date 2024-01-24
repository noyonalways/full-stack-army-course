class MathHelper {
	static add(a, b) {
		return a + b;
	}

	static multiply(a, b) {
		return a * b;
	}
}

const result = MathHelper.multiply(MathHelper.add(3, 5), 2);
console.log(result);