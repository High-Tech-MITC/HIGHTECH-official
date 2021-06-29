import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import "./components/styles/tailwind.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Landing />
            <Contact />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          {/* <Route path="/members">
            <Members />
          </Route> */}
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
