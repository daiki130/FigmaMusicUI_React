import "./App.css";
import logo from "./images/logo.png";
import twitter from "./images/twitter.svg";
import facebook from "./images/facebook.svg";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Top } from "./components/Main/Top/Top.jsx";
import { Discover } from "./components/Main/Discover/Discover.jsx";
import { Join } from "./components/Main/Join/Join.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div className="full-height-grow main-container">
        <div className="container full-height-grow">
          <Header logo={logo} />
          <Switch>
            <Route exact path="/">
              <Top />
            </Route>
            <Route path="/discover">
              <Discover />
            </Route>
            <Route path="/Join">
              <Join />
            </Route>
          </Switch>
          <div className="home-page-circle-1"></div>
          <div className="home-page-circle-2"></div>
          <div className="home-page-circle-3"></div>
        </div>
        <Footer twitter={twitter} facebook={facebook} />
      </div>
    </BrowserRouter>
  );
};

export default App;
