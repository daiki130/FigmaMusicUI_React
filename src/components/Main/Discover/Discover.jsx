import "./Discover.css";
import covers from "../../../images/covers.jpg";
import microphone from "../../../images/microphone.svg";
import albums from "../../../images/albums.svg";
import more from "../../../images/more.svg";

export const Discover = () => {
  return (
    <section className="discover-main-section">
      <div className="call-to-action">
        <h1 className="title">Discover new music</h1>
        <div className="icon-section">
          <div className="icon">
            <img src={microphone} alt="" />
            Charts
          </div>
          <div className="icon">
            <img src={albums} alt="" />
            Albums
          </div>
          <div className="icon">
            <img src={more} alt="" />
            More
          </div>
        </div>
        By joining you can benefit by listening to the latest albums released
      </div>
      <img src={covers} className="covers-image" />
    </section>
  );
};
