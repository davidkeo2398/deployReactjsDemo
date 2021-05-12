import logo from './logo.svg';
import './App.css';

import HomeComponent from './components/HomeComponent'

import { Switch, Route} from 'react-router-dom'

function App() {
  return (
      <Switch>
        <Route exact path='/' component={HomeComponent} />
      </Switch>
  );
}

export default App;
