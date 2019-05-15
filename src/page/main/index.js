import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";

import Banner from "../../components/banner";

const Main = ({ location }) => {
  // Scroll top
  useEffect(() => {
    return () => window.scrollTo(0, 0);
  });
  return (
    <>
      <Banner location={location} />
      <div id="main">
        <Element name="test1" className="element" />
        <section id="one" className="tiles">
          <article>
            <span className="image">
              <img src="images/bg-guesthouse.jpg" alt="" />
            </span>
            <header className="major">
              <h3>
                <Link to="/guesthouse" className="link">
                  게스트하우스
                </Link>
              </h3>
              <p>게스트하우스 서브타이틀</p>
            </header>
          </article>
          <article>
            <span className="image">
              <img src="images/bg-pizza.jpeg" alt="" />
            </span>
            <header className="major">
              <h3>
                <Link to="/strongfire" className="link">
                  스트롱파이어
                </Link>
              </h3>
              <p>스트롱파이어 서브타이틀</p>
            </header>
          </article>
        </section>
      </div>
    </>
  );
};

export default Main;
