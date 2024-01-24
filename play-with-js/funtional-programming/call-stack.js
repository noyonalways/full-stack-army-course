// Call Stack work on LIFO Principle (Last In First Out)


function A() {
	console.log("I am A");
}

function B() {
	A();
}

function C() {
	B();
	B();
}

function D() {
	C();
}

D();  