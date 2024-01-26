import { useState } from "react";
import Product from "./product";
import fetchData from "../../utils/fetch-data";
const productsList = await fetchData("/products.json");

const ProductList = () => {
	const [products, setProducts] = useState(
		productsList.map((product) => ({ ...product, quantity: 0, total: 0 }))
	);

	const incrementQuantity = (id) => {
		const newProducts = products.map((product) => {
			if (id === product.id && product.stock > product.quantity) {
				product.quantity++;
				product.total = product.price * product.quantity;
			}
			return product;
		});

		setProducts(newProducts);
	};
	const decrementQuantity = (id) => {
		const newProducts = products.map((product) => {
			if (id === product.id && product.quantity > 0) {
				product.quantity--;
				product.total = product.price * product.quantity;
			}
			return product;
		});

		setProducts(newProducts);
	};

	const total = products.reduce((acc, cur) => acc + cur.total, 0);

	return (
		<div className="container mx-auto">
			<h2 className="text-center text-2xl font-bold my-5">Product List</h2>
			<table className="table-auto w-full lg:max-w-4xl mx-auto">
				<thead>
					<tr className="bg-slate-200">
						<th className="p-2">ID</th>
						<th className="p-2">Name</th>
						<th className="p-2">Manufacturer</th>
						<th className="p-2">Price</th>
						<th className="p-2">Quantity</th>
						<th className="p-2">Stock</th>
						<th className="p-2">Total</th>
						<th className="p-2 print:hidden">Actions</th>
					</tr>
				</thead>
				<tbody>
					{products.map((product) => (
						<Product
							key={product.id}
							{...product}
							increment={incrementQuantity}
							decrement={decrementQuantity}
						/>
					))}
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td className="font-semibold p-2">{total > 0 && "Total"}</td>
						<td className="p-2">
							{total > 0 && <span>{total.toFixed(2)} BDT</span>}
						</td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default ProductList;
