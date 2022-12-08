import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//App.js
function App(props){
  return <Router>
      <Switch>
        <Route exact path="/">
          <Home /> 
        </Route>
      </Switch>
  </Router>
}


export default App;
