import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Services from "./components/Services";
import Members from "./components/Members";
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
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/members">
            <Members />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
