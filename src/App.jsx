import "./App.css";
import logo from "./images/logo.png";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Top } from "./components/Main/Top/Top.jsx";
import { Discover } from "./components/Main/Discover/Discover.jsx";
import { Join } from "./components/Main/Join/Join.jsx";

const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
