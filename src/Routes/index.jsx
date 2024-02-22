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
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/Cart", element: <Cart /> },
      { path: "/Pyament", element: <Pyament /> },
      { path: "/Login", element: <Login /> },
      { path: "/SignUp", element: <SignUp /> },
      { path: "/Checkout", element: <Checkout /> },
    ],
  },
]);
