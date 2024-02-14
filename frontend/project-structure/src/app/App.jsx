import { RouterProvider } from "react-router-dom";
import { SignUp } from "../pages";
import router from "../routes";

const App = () => {
  return (
    <RouterProvider router={router}>
      <SignUp />
    </RouterProvider>
  );
};

export default App;
