import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Root";
import Home from "../Pages/Home";
import Cart from "../Pages/Cart";
import Pyament from "../Pages/Payment";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Checkout from "../components/Checkout";
export const PublicRouter = createBrowserRouter([
  {
    path: "/E-Commerce",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/E-Commerce/Cart", element: <Cart /> },
      { path: "/E-Commerce/Pyament", element: <Pyament /> },
      { path: "/E-Commerce/Login", element: <Login /> },
      { path: "/E-Commerce/SignUp", element: <SignUp /> },
      { path: "/E-Commerce/Checkout", element: <Checkout /> },
    ],
  },
]);
