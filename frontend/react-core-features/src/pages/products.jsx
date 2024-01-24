export default function Products() {
	return (
		<div>
			<h1>Products</h1>
		</div>
	);
}

// data structure for the product card
const productStructure = {
	id: "string",
	title: "string",
	price: "number",
	description: "string",
	image: "string",
	wishList: "boolean",
	tags: ["object"],
	batch: ["object"],
	categories: ["object"],
	featuredImages: ["object"],
};

const menus = [
	{
		id: 1,
		text: "Home",
		link: "#",
	},
	{
		id: 2,
		text: "Home Child 1",
		link: "#",
	},
	{
		id: 3,
		text: "Home Child 2",
		link: "#",
	},
	{
		id: 4,
		text: "About Child 1",
		link: "#",
	},
	{
		id: 5,
		text: "About Child 2",
	},
];

const childrenMap = [
	{
		id: 1,
		children: [2, 3],
	},
	{
		id: 2,
		children: [4, 5],
	},
];
