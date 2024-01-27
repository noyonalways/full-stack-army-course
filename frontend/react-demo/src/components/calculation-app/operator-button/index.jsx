import PropTypes from "prop-types";

const OperatorButton = ({ operator, handleArticmeticOps }) => {
	return (
		<button
			type="button"
			className="bg-blue-400 hover:bg-blue-500 text-white font-bold px-4 py-1 rounded active:scale-95 duration-150"
			onClick={() => handleArticmeticOps(operator.symbol)}
		>
			{operator.symbol}
		</button>
	);
};

OperatorButton.propTypes = {
	operator: PropTypes.shape({
		symbol: PropTypes.string.isRequired,
	}).isRequired,
	handleArticmeticOps: PropTypes.func.isRequired,
};

export default OperatorButton;
