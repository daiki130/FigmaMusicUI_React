import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <footer className="main-footer">
        <div className="container">
          <nav className="footer-nav">
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <nav className="footer-nav">
            <ul>
              <li>
                <a href="#" className="social-link">
                  <img src="./images/twitter.svg" alt="" />
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <img src="./images/facebook.svg" alt="" />
                  Facebook
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
};
