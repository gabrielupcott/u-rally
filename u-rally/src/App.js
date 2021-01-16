import './App.css';
import {Route, Link, BrowserRouter as Router, Switch, BrowserRouter} from 'react-router-dom'
import Routes from './routes'
import Landing from './Landing'
import Map from './Map'
import Create from './Create'

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/Create">
          <Create />
        </Route>
        <Route exact path="/Map">
          <Map />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
