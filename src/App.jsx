import "./App.css";
import logo from "./images/logo.png";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Top } from "./components/Main/Top/Top.jsx";
import { Discover } from "./components/Main/Discover/Discover.jsx";
import { Join } from "./components/Main/Join/Join.jsx";

const App = () => {
  return (
    <>
      <div className="container full-height-grow">
        <Header logo={logo} />
        <Section />
        <div className="home-page-circle-1"></div>
        <div className="home-page-circle-2"></div>
        <div className="home-page-circle-3"></div>
      </div>
    </>
  );
};

export default App;
