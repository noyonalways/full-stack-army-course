import { Router } from "@reach/router";
import ProductList from "./components/product-list";
import TodoApp from "./components/todos";
import CalculationApp from "./components/calculation-app";
import DemoHome from "./components/demo-home";
import ContactListApp from "./components/contact-list-app";

const App = () => {
  return (
    <Router>
      <DemoHome path="/" />
      <TodoApp path="/todo" />
      <CalculationApp path="/calc-app" />
      <ProductList path="/product-list" />
      <ContactListApp path="/contact-list" />
    </Router>
  );
};

export default App;
