import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import IPhone15Pro from "./pages/IPhone15Pro";
import IPhone15 from "./pages/IPhone15";
import Compare from "./pages/Compare";
import Accessories from "./pages/Accessories";
import Pricing from "./pages/Pricing";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "iphone15pro", Component: IPhone15Pro },
      { path: "iphone15", Component: IPhone15 },
      { path: "compare", Component: Compare },
      { path: "accessories", Component: Accessories },
      { path: "pricing", Component: Pricing },
      { path: "*", Component: Home },
    ],
  },
]);
