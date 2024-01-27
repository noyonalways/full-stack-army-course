import PropTypes from "prop-types";

const HistoryItem = ({ historyItem, restoredHistory, handleRestoreBtn }) => {
	return (
		<li className="bg-slate-300 rounded p-2 space-y-1">
			<div className="flex space-x-2">
				<span className="font-medium">Operaiton:</span>
				<div className="flex space-x-1">
					<div className="flex items-center space-x-1">
						<span>{historyItem.inputs.a}</span>
						<span>{historyItem.operator}</span>
						<span>{historyItem.inputs.b}</span>
					</div>
					<p className="flex space-x-1">
						<span className="font-medium">Result:</span>
						<span>{historyItem.result}</span>
					</p>
				</div>
			</div>
			<div className="flex items-center space-x-2">
				<div className="space-x-2">
					<span>{historyItem.date.toLocaleTimeString()}</span>
					<span>{historyItem.date.toLocaleDateString()}</span>
				</div>
				<button
					disabled={
						restoredHistory !== null && restoredHistory.id === historyItem.id
					}
					onClick={() => handleRestoreBtn(historyItem)}
					className={`px-3 bg-green-400 text-white rounded active:scale-95 disabled:bg-blue-400`}
				>
					Restore
				</button>
			</div>
		</li>
	);
};

HistoryItem.propTypes = {
	historyItem: PropTypes.shape({
		inputs: PropTypes.shape({
			a: PropTypes.number.isRequired,
			b: PropTypes.number.isRequired,
		}).isRequired,
		operator: PropTypes.string.isRequired,
		result: PropTypes.number.isRequired,
		date: PropTypes.instanceOf(Date).isRequired,
		id: PropTypes.string.isRequired,
	}).isRequired,
	restoredHistory: PropTypes.shape({
		id: PropTypes.string.isRequired,
	}).isRequired,
	handleRestoreBtn: PropTypes.func.isRequired,
};

export default HistoryItem;
