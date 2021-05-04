import {Channel, Home, Navbar, Sidebar} from './components'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
  return (
      <Router>
        <Navbar/>
        <Switch>
            <Route exact path={"/"}>
                <Home/>
            </Route>

            <Route path={"/channels"}>
                <Channel />
            </Route>
        </Switch>
      </Router>

  );
}

export default App;
