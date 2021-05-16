import "./Join.css";

export const Join = () => {
  return (
    <>
      <section className="join-main-section">
        <h1 className="join-text">
          Join the
          <span className="accent-text">fun.</span>
        </h1>
        <form className="join-form">
          <div className="input-group">
            <label>Name:</label>
            <input type="text" />
          </div>
          <div className="input-group">
            <label>Emaile:</label>
            <input type="email" />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input type="password" />
          </div>
          <div className="input-group">
            <button type="submit" className="btn">
              Join Now
            </button>
          </div>
        </form>
      </section>
    </>
  );
};
