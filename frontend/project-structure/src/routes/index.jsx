import { createBrowserRouter } from "react-router-dom";
import { Home, NotFound, ReactUse, SignIn, SignUp } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/react-use",
    element: <ReactUse />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
