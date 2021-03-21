import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './hero/Header';
import Sidebar from './sidebar/Sidebar';
import Datawrap from './Components/Leaders/Datawrap';
import Loader from './loader/Loader';
import Nation from './Components/Nations/Nation';
import Demographics from './Components/Demographics/Demographics';
import Disappointers from './Components/Disappointers/Disappointers';
import Performers from './Components/Performers/Performer';


function App() {
  return (
    <div className="App">
        <Router>
        <Sidebar />
        <Switch>
          <Route path="/" exact component={Header} />
          <Route path="/demographics" component={Demographics} />
          <Route path="/performer" exact component={Performers} />
          <Route path="/leaders" exact component={Datawrap} />
          <Route path="/disappointer" exact component={Disappointers} />
          <Route path="/cases" exact component={Nation} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
