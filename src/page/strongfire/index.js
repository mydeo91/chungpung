import React, { useEffect } from "react";
import Banner from "../../components/banner";

const StringFire = ({ location }) => {
  // Scroll top
  useEffect(() => {
    return () => window.scrollTo(0, 0);
  });
  return (
    <>
      <Banner location={location} />
      <div id="main">
        <section id="one">
          <div class="inner">
            <header class="major">
              <h2>강화동네 사람들의 아지트 술집</h2>
            </header>
            <p>
              스트롱파이어는 아삭민박 1층에 위치한 동네 술집 입니다. 여행객과
              동네사람이 즐겁게 어울리는 커뮤니티 공간이기도 하며 공연, 파티
              등을 주기적으로 열고 ​있습니다.​
            </p>
          </div>
        </section>

        <section id="two" class="spotlights">
          <section>
            <a href="generic.html" class="image">
              <img
                src="images/pic08.jpg"
                alt=""
                data-position="center center"
              />
            </a>
            <div class="content">
              <div class="inner">
                <header class="major">
                  <h3>Orci maecenas</h3>
                </header>
                <p>
                  Nullam et orci eu lorem consequat tincidunt vivamus et
                  sagittis magna sed nunc rhoncus condimentum sem. In efficitur
                  ligula tate urna. Maecenas massa sed magna lacinia magna
                  pellentesque lorem ipsum dolor. Nullam et orci eu lorem
                  consequat tincidunt. Vivamus et sagittis tempus.
                </p>
                <ul class="actions">
                  <li>
                    <a href="generic.html" class="button">
                      Learn more
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <a href="generic.html" class="image">
              <img src="images/pic09.jpg" alt="" data-position="top center" />
            </a>
            <div class="content">
              <div class="inner">
                <header class="major">
                  <h3>Rhoncus magna</h3>
                </header>
                <p>
                  Nullam et orci eu lorem consequat tincidunt vivamus et
                  sagittis magna sed nunc rhoncus condimentum sem. In efficitur
                  ligula tate urna. Maecenas massa sed magna lacinia magna
                  pellentesque lorem ipsum dolor. Nullam et orci eu lorem
                  consequat tincidunt. Vivamus et sagittis tempus.
                </p>
                <ul class="actions">
                  <li>
                    <a href="generic.html" class="button">
                      Learn more
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <a href="generic.html" class="image">
              <img src="images/pic10.jpg" alt="" data-position="25% 25%" />
            </a>
            <div class="content">
              <div class="inner">
                <header class="major">
                  <h3>Sed nunc ligula</h3>
                </header>
                <p>
                  Nullam et orci eu lorem consequat tincidunt vivamus et
                  sagittis magna sed nunc rhoncus condimentum sem. In efficitur
                  ligula tate urna. Maecenas massa sed magna lacinia magna
                  pellentesque lorem ipsum dolor. Nullam et orci eu lorem
                  consequat tincidunt. Vivamus et sagittis tempus.
                </p>
                <ul class="actions">
                  <li>
                    <a href="generic.html" class="button">
                      Learn more
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </section>

        <section id="three">
          <div class="inner">
            <header class="major">
              <h2>Massa libero</h2>
            </header>
            <p>
              Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
              libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
              Pellentesque condimentum sem. In efficitur ligula tate urna.
              Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
              Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
              libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra
              et feugiat tempus.
            </p>
            <ul class="actions">
              <li>
                <a href="generic.html" class="button next">
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default StringFire;
