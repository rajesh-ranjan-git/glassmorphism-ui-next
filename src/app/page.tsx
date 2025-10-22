import { Facebook, Github, Instagram, Twitter } from "lucide-react";

export default function Home() {
  return (
    <section>
      <div className="container">
        <div className="card">
          <div className="imgBx">
            <img src="assets/IMG_0009.JPG" alt="pic" />
          </div>
          <div className="content">
            <div className="contentBx">
              <h3>
                Rajesh Ranjan
                <br />
                <span>Full Stack Developer</span>
              </h3>
            </div>
            <ul className="sci">
              <li style={{ "--i": 1 } as React.CSSProperties}>
                <a href="#">
                  <Facebook />
                </a>
              </li>
              <li style={{ "--i": 2 } as React.CSSProperties}>
                <a href="#">
                  <Twitter />
                </a>
              </li>
              <li style={{ "--i": 3 } as React.CSSProperties}>
                <a href="#">
                  <Instagram />
                </a>
              </li>
              <li style={{ "--i": 4 } as React.CSSProperties}>
                <a href="#">
                  <Github />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="imgBx">
            <img src="assets/IMG_0390.jpg" alt="pic" />
          </div>
          <div className="content">
            <div className="contentBx">
              <h3>
                Sayantanee Mohanta
                <br />
                <span>Helpdesk Senior Associate</span>
              </h3>
            </div>

            <ul className="sci">
              <li style={{ "--i": 1 } as React.CSSProperties}>
                <a href="#">
                  <Facebook />
                </a>
              </li>
              <li style={{ "--i": 2 } as React.CSSProperties}>
                <a href="#">
                  <Twitter />
                </a>
              </li>
              <li style={{ "--i": 3 } as React.CSSProperties}>
                <a href="#">
                  <Instagram />
                </a>
              </li>
              <li style={{ "--i": 4 } as React.CSSProperties}>
                <a href="#">
                  <Github />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="imgBx">
            <img src="assets/IMG_0392.jpg" alt="pic" />
          </div>
          <div className="content">
            <div className="contentBx">
              <h3>
                Rajesh Rahee
                <br />
                <span>Full Stack Developer</span>
              </h3>
            </div>

            <ul className="sci">
              <li style={{ "--i": 1 } as React.CSSProperties}>
                <a href="#">
                  <Facebook />
                </a>
              </li>
              <li style={{ "--i": 2 } as React.CSSProperties}>
                <a href="#">
                  <Twitter />
                </a>
              </li>
              <li style={{ "--i": 3 } as React.CSSProperties}>
                <a href="#">
                  <Instagram />
                </a>
              </li>
              <li style={{ "--i": 4 } as React.CSSProperties}>
                <a href="#">
                  <Github />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
