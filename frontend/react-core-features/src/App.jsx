import { Router } from "@reach/router";
import { Component } from "react";
import Home from "./pages/home";
import About from "./pages/about";
import Todo from "./pages/todo";
import Products from "./pages/products";
import DynamicForm from "./components/dynamic-form";

class App extends Component {
	render() {
		return (
			<>
				<Router>
					<Home path="/" />
					<About path="/about" />
					<Todo path="/todo" />
					<Products path="/products" />
					<DynamicForm path="/form" />
				</Router>
			</>
		);
	}
}

export default App;
