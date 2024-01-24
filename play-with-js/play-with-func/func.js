// Function code of above psudocode

function sleep(name) {
	console.log(`${name} is sleeping`);
}
function awake(name) {
	console.log(`${name} is awake`);
}
function eat(name, time) {
	console.log(`${name} is taking ${time}`);
}
function walk(name, destination) {
	console.log(`${name} is walking to ${destination}`);
}
function study(name) {
	console.log(`${name} is studying`);
}
function work(name) {
	console.log(`${name} is working`);
}

function jobHolderLifecycle(name) {
	awake(name);
	eat(name, "breakfast");
	walk(name, "office");
	work(name);
	eat(name, "lunch");
	walk(name, "home");
	eat(name, "dinner");
	sleep(name);
}

function studentLifecycle(name) {
	awake(name);
	eat(name, "breakfast");
	walk(name, "college");
	work(name);
	eat(name, "lunch");
	walk(name, "home");
	eat(name, "dinner");
	sleep(name);
}

studentLifecycle("Noyon");
