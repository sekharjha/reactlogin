import './App.css';
import Login from './Pages/login'
import SignUp from './Pages/signUp'
import Profile from './Pages/profile'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
      <Route exact path='/' component={Login}></Route>
      <Route exact path='/signup' component={SignUp}></Route>
      <Route exact path='/profile' component={Profile}></Route>
      </Switch>
      </Router>
      
    </div>
  );
}

export default App;
