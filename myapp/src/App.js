import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import PokeUpdate from "./pages/PokeUpdate"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css"


//App.js
function App(props){
  return (
    <Router>
      <div className="center">
        <ul>
          <Link to="/"><button className="button-24 left" >Pokemon </button></Link>
          <Link to="/Pokedex"><button className="button-24" >Pokedex </button></Link>
          <Link to="/PokeUpdate"><button className="button-24 right" >Modification Pokemon </button></Link>
        </ul> 
        <Switch>
          <Route exact path="/">
            <Home /> 
          </Route>
          <Route path="/Pokedex">
            <Pokedex />
          </Route>
          <Route path="/PokeUpdate">
            <PokeUpdate />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};


export default App;