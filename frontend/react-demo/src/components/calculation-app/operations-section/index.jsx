import PropTypes from "prop-types";
import OperatorButton from "../operator-button";

const operators = [
  {
    id: "001",
    name: "Add",
    symbol: "+",
  },
  {
    id: "002",
    name: "Minus",
    symbol: "-",
  },
  {
    id: "003",
    name: "Multiply",
    symbol: "*",
  },
  {
    id: "004",
    name: "Divide",
    symbol: "/",
  },
  {
    id: "005",
    name: "Modulus",
    symbol: "%",
  },
  {
    id: "006",
    name: "Power",
    symbol: "**",
  },
];

const OperationsSection = ({ handleArticmeticOps, handleClearOps }) => {
  return (
    <div>
      <p className="mb-2 text-lg font-medium">Operations</p>
      <div className="space-x-2 flex justify-center">
        {operators.map((operator) => (
          <OperatorButton
            handleArticmeticOps={handleArticmeticOps}
            key={operator.id}
            operator={operator}
          />
        ))}
        <button
          className="px-4 py-1 bg-red-400 hover:bg-red-500 text-white border active:scale-95 rounded"
          onClick={handleClearOps}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

OperationsSection.propTypes = {
  handleArticmeticOps: PropTypes.func.isRequired,
  handleClearOps: PropTypes.func.isRequired,
};

export default OperationsSection;
