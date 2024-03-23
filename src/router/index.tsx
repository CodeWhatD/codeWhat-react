import { createBrowserRouter } from "react-router-dom";
import Root from "../App";
import ErrorPage from "../pages/route/errorPage";
export default createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);
