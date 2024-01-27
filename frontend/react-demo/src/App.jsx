import { Router } from "@reach/router";
import ProductList from "./components/product-list";
import Todos from "./components/todos";
import CalculationApp from "./components/calculation-app";

const App = () => {
	return (
		<Router>
			<ProductList path="/product-list" />
			<Todos path="/todos" />
			<CalculationApp path="/" />
		</Router>
	);
};

export default App;
