import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Educ from "./pages/Educ/Educ";
import Expe from "./pages/Expe/Expe";
import Head from "./Head/Head";
import Skills from "./pages/Skills/Skills"
import Nofind from "./pages/Nofind/Nofind";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <Router>
    <div className="App">
    <Head />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/educ" component={Educ} />
          <Route path="/expe" component={Expe} />
          <Route path="/skills" component={Skills} />
          <Route path="/contact" component={Contact} />
          <Route path="https://praveenkumar366.github.io/" component={Home} />
          <Route component={Nofind} />
        </Switch>
    </div>
    </Router>
  );
}

export default App;
