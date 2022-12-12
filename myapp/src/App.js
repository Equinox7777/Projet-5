import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
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
          <Link to="/"><button className="buttonHome left" >Pokemon </button></Link>
          <Link to="/Pokedex"><button className="buttonHome right" >Pokedex </button></Link>
        </ul> 
        <Switch>
          <Route exact path="/">
            <Home /> 
          </Route>
          <Route path="/Pokedex">
            <Pokedex />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};


export default App;
