const names = [
	"Asraf",
	"Noyon",
	"Nadim",
	"Mahfuj",
	"Shakil",
	"Sabbir",
	"Jahid",
	"Asif",
	"Eran",
	"Ovi",
	"Badon",
	"Fahad",
	"Ekram",
	"Milton",
	"Omit",
	"Sohan",
	"Alif",
	"Mridul",
	"Saoun",
];

const namesGroped = names.reduce((acc, cur) => {
	const firstLetter = cur[0].toUpperCase();
	if (firstLetter in acc) {
		acc[firstLetter].push(cur);
	} else {
		acc[firstLetter] = [cur];
	}
	return acc;
}, {});

console.log(namesGroped);




Object.keys(namesGroped).forEach((groupKey) => {
	console.log("__________", groupKey, "__________");
	namesGroped[groupKey].forEach((name) => console.log(name));
});
