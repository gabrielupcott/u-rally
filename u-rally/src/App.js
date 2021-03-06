import './App.css';
import {Route, Link, BrowserRouter as Router, Switch, BrowserRouter} from 'react-router-dom'
import Routes from './routes'
import Landing from './Landing'
import Map from './Map'
import Create from './Create'
import Header from './Header'
import Mappopup from './Mappopup'
function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/u-rally/">
          <Landing />
        </Route>
        <Route exact path="/u-rally/Create">
          <Create />
        </Route>
        <Route exact path="/u-rally/Map">
          <Map />
        </Route>
        <Route exact path="/u-rally/Mappopup">
        <Mappopup />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
