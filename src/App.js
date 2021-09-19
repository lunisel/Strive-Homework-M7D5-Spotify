import { BrowserRouter, Route } from "react-router-dom";
import Homepage from "./Components/homepage/Homepage";
import NavBar from "./Components/NavBar";
import Player from "./Components/Player";
import SearchPage from "./Components/search/SearchPage";
import "./styles.css";

export default function App() {
  return <div className="App">
    <BrowserRouter>
    <NavBar/>
    <Route path="/" exact render={(routerProps) => <Homepage {...routerProps}/>}/>
    <Route path="/search" exact render={(routerProps) => <SearchPage {...routerProps}/>}/>
    <Player/>
    </BrowserRouter>
  </div>;
}
