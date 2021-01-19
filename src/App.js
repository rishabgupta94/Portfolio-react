import { Switch, Redirect, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/home" render={(props) => <Home {...props} /> } />
      <Redirect from="/" to="/home" />
      </Switch>
    </div>
  );
}

export default App;
