import "./Header.css";
import { BrowserRouter, Link } from "react-router-dom";

export const Header = (props) => {
  const { logo } = props;
  return (
    <BrowserRouter>
      <header className="main-header">
        <Link to="/" className="brand-logo">
          <img src={logo} width={50} height={50} />
          <div className="brand-logo-name">Soundwave</div>
        </Link>
        <nav className="main-nav">
          <ul>
            <li>
              <Link to="/discover">Discover</Link>
            </li>
            <li>
              <Link to="/Join">Join</Link>
            </li>
          </ul>
        </nav>
      </header>
    </BrowserRouter>
  );
};
