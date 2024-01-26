import PropTypes from "prop-types";
const Product = ({
	id,
	name,
	price,
	stock,
	quantity,
	total,
	increment,
	decrement,
	manufacturer,
}) => (
	<tr className="even:bg-slate-100">
		<td className="p-2">{id}</td>
		<td className="p-2 font-medium">{name}</td>
		<td className="p-2">{manufacturer}</td>
		<td className="p-2">{price}</td>
		<td className="p-2">{quantity}</td>
		<td className="p-2">{stock}</td>
		<td className="p-2">{total.toFixed(2)}</td>
		<td className="flex items-center justify-end space-x-1">
			<button
				disabled={quantity === 0}
				onClick={() => decrement(id)}
				className={`print:hidden active:scale-95 duration-200 px-4 py-1 rounded bg-red-400 text-lg text-white ${
					quantity === 0 && "disabled:bg-red-100"
				}`}
			>
				-
			</button>
			<button
				disabled={quantity === stock}
				onClick={() => increment(id)}
				className={`print:hidden active:scale-95 duration-200 px-4 py-1 rounded bg-green-400 text-lg text-white
            ${quantity === stock && "disabled:bg-green-100"}
            `}
			>
				+
			</button>
		</td>
	</tr>
);

Product.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	stock: PropTypes.number.isRequired,
	quantity: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
	increment: PropTypes.func.isRequired,
	decrement: PropTypes.func.isRequired,
	manufacturer: PropTypes.string.isRequired,
};

export default Product;
