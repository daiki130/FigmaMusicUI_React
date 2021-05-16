import logo from "./images/logo.png";
import { Header } from "./components/Header/Header";
import { Section } from "./components/Section/Main/Section";
import "./App.css";

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
