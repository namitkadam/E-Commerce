import ECommerceProvider from "./Context/context";
import { PublicRouter } from "../src/Routes";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  RouterProvider,
} from "react-router-dom";

function App() {
  return (
    <>
      <ECommerceProvider>
        <RouterProvider router={PublicRouter} />
      </ECommerceProvider>
    </>
  );
}

export default App;
