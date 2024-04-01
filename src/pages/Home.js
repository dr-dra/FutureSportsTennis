import Carousel from "../components/Carousel";
import "../styles.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  // Carousel:  get images from the 'src/media/home/'
  const importAll = (r) => r.keys().map(r);
  const images = importAll(require.context("../media/home", false, /\.(jpg)$/));

  // console.log(images);

  return (
    <div className="block100">
      {/* Carousel */}
      <div className="maincontents slideshow">
        <div>
          <Carousel images={images} />
        </div>

        <div>
          <aside className="sidepanel">
            <h5>Upcoming Events</h5>
            <div class="events">
              <ul>
                <li>
                  <span className="headding">
                    <a href="#">Lorem ipsum dolor sit amet</a>
                  </span>
                  <span className="Contents">
                    Consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </span>
                </li>

                <li>
                  <span className="headding">
                    <a href="#">Ut enim ad minim veniam</a>
                  </span>
                  <span className="Contents">
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat
                  </span>
                </li>

                <li>
                  <span className="headding">
                    <a href="#">Duis aute irure dolor in reprehenderit</a>
                  </span>
                  <span className="Contents">
                    Voluptate velit esse cillum dolore eu fugiat nulla pariatur
                  </span>
                </li>

                <li>
                  <span className="headding">
                    <a href="#">
                      Excepteur sint occaecat cupidatat non proident
                    </a>
                  </span>
                  <span className="Contents">
                    Sunt in culpa qui officia deserunt mollit anim id est
                    laborum
                  </span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Home;
