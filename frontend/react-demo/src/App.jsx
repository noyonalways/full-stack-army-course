import { Router } from "@reach/router";
import ProductList from "./components/product-list";
import TodoApp from "./components/todos";
import CalculationApp from "./components/calculation-app";
import DemoHome from "./components/demo-home";
import ContactListApp from "./components/contact-list-app";
// import GetUserDetails from "./components/learn-useEffect/get-user-details";
// import GetUserDetailsCache from "./components/learn-useEffect/get-user-with-cache ";
import GetUserDetailsCache2 from "./components/learn-useEffect/get-user-with-cache2";
import FetchDataByCustomHook from "./components/fetch-day-by-hook";

const App = () => {
  return (
    <Router>
      <DemoHome path="/" />
      <TodoApp path="/todo" />
      <CalculationApp path="/calc-app" />
      <ProductList path="/product-list" />
      <ContactListApp path="/contact-list" />
      <GetUserDetailsCache2 path="/get-user-details" />
      <FetchDataByCustomHook path="/fetch-data-by-hook" />
    </Router>
  );
};

export default App;
