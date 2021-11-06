
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Products from "./Products";
import Contact from "./Contact";
function App() {
  return (
    <div>
      <Router>
        <nav>
          <div class="menu">
            <div class="logo">
              <Link to="/">KSBAKERY</Link>
            </div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/About">About</Link></li>
              <li><Link to="/Services">Services</Link></li>
              <li><Link to="/Products">Products</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/Products">
            <Products />
          </Route>
          <Route path="/Services">
            <Services />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
