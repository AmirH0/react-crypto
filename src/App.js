import { useRoutes } from "react-router-dom";
import "./App.css";
import router from "./Router";


function App() {
  let route = useRoutes(router);

  return <div className="App">{route}</div>;
}

export default App;
