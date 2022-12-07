import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


<Router>
    <Switch>
      <Route exact path="/"> //ici on met l'URL dans le navigateur
        <Home /> //ici on donne la page à afficher en fonction de cette URL
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
</Router>

function Menu(){
  return <nav>
      <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/shop">Boutique</Link></li>
          <li><Link to="/cart">Panier</Link></li>
      </ul>
  </nav>
}

export default App;
