import "./Footer.css";

export const Footer = (props) => {
  const { twitter, facebook } = props;
  const FooterPs = ["About Us", "Contact"];
  const SocialAppPs = ["Twitter", "Facebook"];

  return (
    <>
      <footer className="main-footer">
        <div className="container">
          <nav className="footer-nav">
            <ul>
              {FooterPs.map((p, index) => {
                return (
                  <a href="#" key={index}>
                    {p}
                  </a>
                );
              })}
            </ul>
          </nav>
          <nav className="footer-nav">
            <ul>
              {SocialAppPs.map((App, index) => {
                return (
                  <li key={index}>
                    <a href="#" className="social-link">
                      <img
                        src={App === "Twitter" ? twitter : facebook}
                        alt=""
                      />
                      {App}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
};
