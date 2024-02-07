import useCounter from "../../hooks/useCounter";
import PropTypes from "prop-types";

const CounterController = ({ handleDec, handleInc, count }) => {
  return (
    <div className="bg-slate-200 lg:max-w-2xl mx-auto p-3 w-full rounded-md">
      <h1 className="text-2xl font-bold text-center my-5">Counter: {count}</h1>
      <div className="flex gap-x-2 justify-center">
        <button
          onClick={handleDec}
          className="px-3 py-1 bg-red-400 text-white text-xl"
        >
          -
        </button>
        <button
          onClick={handleInc}
          className="px-3 py-1 bg-green-400 text-white text-xl"
        >
          +
        </button>
      </div>
    </div>
  );
};

CounterController.propTypes = {
  handleDec: PropTypes.func.isRequired,
  handleInc: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};

const CounterController2 = (props) => {
  const { count, handleDec, handleInc } = useCounter({ ...props });
  return (
    <div className="bg-slate-200 lg:max-w-2xl mx-auto p-3 w-full rounded-md">
      <h1 className="text-2xl font-bold text-center my-5">Counter: {count}</h1>
      <div className="flex gap-x-2 justify-center">
        <button
          onClick={handleDec}
          className="px-3 py-1 bg-red-400 text-white text-xl"
        >
          -
        </button>
        <button
          onClick={handleInc}
          className="px-3 py-1 bg-green-400 text-white text-xl"
        >
          +
        </button>
      </div>
    </div>
  );
};

const CounterByHook = () => {
  return (
    <section className="mt-5">
      <h1 className="text-2xl font-bold text-center py-3 mb-3">
        Counter App by using the Custom React Hook
      </h1>
      <div className="container mx-auto space-y-5">
        <CounterController2 initial={5} />
        <CounterController2 lowerBound={-5} />
        <CounterController2 upperBound={15} />
      </div>
    </section>
  );
};

export default CounterByHook;
