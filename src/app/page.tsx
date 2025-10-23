export default function Home() {
  return (
    <section>
      <div className="color"></div>
      <div className="color"></div>
      <div className="color"></div>

      <div className="box">
        <div
          className="square"
          style={
            {
              "--i": 0,
            } as React.CSSProperties
          }
        ></div>
        <div
          className="square"
          style={
            {
              "--i": 1,
            } as React.CSSProperties
          }
        ></div>
        <div
          className="square"
          style={
            {
              "--i": 2,
            } as React.CSSProperties
          }
        ></div>
        <div
          className="square"
          style={
            {
              "--i": 3,
            } as React.CSSProperties
          }
        ></div>
        <div
          className="square"
          style={
            {
              "--i": 4,
            } as React.CSSProperties
          }
        ></div>
        <div className="container">
          <div className="form">
            <h2>Login Form</h2>
            <form>
              <div className="inputBox">
                <input type="text" placeholder="Username" />
              </div>
              <div className="inputBox">
                <input type="password" placeholder="Password" />
              </div>
              <div className="inputBox">
                <input type="submit" value="Login" />
              </div>
              <p className="forget">
                Forgot password? <a href="#">Click Here</a>
              </p>
              <p className="forget">
                Don't have an account? <a href="#">Sign Up</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
