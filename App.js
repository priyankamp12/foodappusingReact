import "./App.css";
import Header from "./Components/Header";

//import Body1 from "./Components/Body1";
//import About from "./Components/About";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
