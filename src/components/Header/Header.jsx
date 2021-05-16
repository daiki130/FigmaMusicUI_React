import "./Header.css";

export const Header = (props) => {
  const { logo } = props;
  return (
    <>
      <header className="main-header">
        <a href="/" className="brand-logo">
          <img src={logo} width={50} height={50} />
          <div className="brand-logo-name">Soundwave</div>
        </a>
        <nav className="main-nav">
          <ul>
            <li>
              <a href="discover.html">Discover</a>
            </li>
            <li>
              <a href="Join.html">Join</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
