import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Orders from './components/Orders';
import Admin from './components/Admin';
import Details from './components/Details';
import Login from './components/Login';
import Header from './components/Header';
// import PrivateRoute from './components/PrivateRoute/PrivateRoute';
function App() {
  return (
    <Router>
          <Header/>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/orders">
              <Orders />
            </Route>
            <Route exact path="/admin">
              <Admin />
            </Route>
            <Route exact path="/details">
              <Details />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
          </Switch>
      </Router>
  );
}

export default App;
