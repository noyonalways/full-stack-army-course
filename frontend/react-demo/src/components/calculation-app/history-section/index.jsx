import PropTypes from "prop-types";
import HistoryItem from "../history-item";
const HistorySection = ({ histories, restoredHistory, handleRestoreBtn }) => {
  return (
    <div>
      <p className="my-2 text-lg font-medium">History</p>
      {histories.length === 0 ? (
        <p className="mb-2">There is no History</p>
      ) : (
        <ul className="space-y-2">
          {histories.map((historyItem) => (
            <HistoryItem
              key={historyItem.id}
              historyItem={historyItem}
              restoredHistory={restoredHistory}
              handleRestoreBtn={handleRestoreBtn}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

HistorySection.propTypes = {
  restoredHistory: PropTypes.object,
  histories: PropTypes.array.isRequired,
  handleRestoreBtn: PropTypes.func.isRequired,
};

export default HistorySection;
