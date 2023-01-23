import React from "react";
import "./styles/color.css";
import "./styles/font.css";
import ReactDOM from "react-dom";
import CustomersDetailswithPr from "pages/CustomersDetailswithPr";
import Orders from "pages/Orders";
import Overview from "pages/Overview";
import "./styles/index.css";
import "./styles/tailwind.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminLogin from "pages/Login/AdminLogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminLogin />,
  },
  {
    path: "/orders",
    element: <Orders />,
  },
  {
    path: "/overview",
    element: <Overview />,
  },
  {
    path: "/customersdetailswithpr",
    element: <CustomersDetailswithPr />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
