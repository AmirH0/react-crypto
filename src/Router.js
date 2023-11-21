import Notfound from "./components/Notfound";
import Coin from "./components/coins/Coin";
import Home from "./components/home/Home";

let router = [
  { path: "/", element: <Home /> },
  { path: "/coin/:ID", element: <Coin /> },
  { path: "*", element: <Notfound /> },
];

export default router;
