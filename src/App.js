import logo from './logo.svg';
import './App.css';

import HomeComponent from './components/HomeComponent'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomeComponent} />
      </Switch>
    </Router>
  );
}

export default App;
