import { BrowserRouter } from "react-router-dom";
import NavBar from "./Components/NavBar";
import "./styles.css";

export default function App() {
  return <div className="App">
    <BrowserRouter>
    <NavBar/>
    </BrowserRouter>
  </div>;
}
