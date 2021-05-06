import {Channel, Home, Navbar} from './components'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import MyChannels from "./components/MyChannels";

function App() {
    const user = "Blabla"
  return (
      <Router>
        <Navbar/>
        <Switch>
            <Route exact path={"/"} component={Home} />
            <Route path={"/channels/:id"} component={Channel}/>
            <Route path={"/mychannels"} component={MyChannels}/>
        </Switch>
      </Router>

  );
}

export default App;
