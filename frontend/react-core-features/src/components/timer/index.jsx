import { Component } from "react";

class Timer extends Component {
	state = {
		count: 0,
	};

	intervalId = null;

	increment = () => {
		this.setState({ count: this.state.count + 1 });
	};

	decrement = () => {
		if (this.state.count > 0) {
			this.setState({ count: this.state.count - 1 });
		}
	};

	startTimeer = () => {
		if (this.state.count > 0 && !this.intervalId) {
			this.intervalId = setInterval(() => {
				this.setState({ count: this.state.count - 1 }, () => {
					if (this.state.count === 0) {
						alert("Timer is finished");
						clearInterval(this.intervalId);
						this.intervalId = null;
					}
				});
			}, 1000);
		}
	};

	stopTimer = () => {
		if (this.intervalId) {
			clearInterval(this.intervalId);
			this.intervalId = null;
		}
	};

	resetTimer = () => {
		this.setState({ count: 0 });
		clearInterval(this.intervalId);
		this.intervalId = null;
	};

	render() {
		return (
			<div>
				<h2 className="text-2xl font-bold text-center mb-3">Simple Timer</h2>
				<div className="max-w-sm border shadow-md rounded p-3 mx-auto space-y-3">
					<div className="flex space-x-3 items-center justify-center">
						<button onClick={this.decrement} className="btn text-2xl">
							-
						</button>
						<span className="text-2xl">{this.state.count}</span>
						<button onClick={this.increment} className="btn text-2xl">
							+
						</button>
					</div>
					<div className="flex items-center justify-center space-x-3">
						<button onClick={this.startTimeer} className="btn">
							Start
						</button>
						<button onClick={this.stopTimer} className="btn">
							Stop
						</button>
						<button onClick={this.resetTimer} className="btn">
							Reset
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Timer;
