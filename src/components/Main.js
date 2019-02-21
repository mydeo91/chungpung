import React from 'react';
// import { Link } from 'react-router-dom';
import { BannerIndex } from 'components';

const Main = () => {
    return (
        <div>

            <BannerIndex />

            <div id="main">

                <section id="one" class="tiles">
                    <article>
                        <span class="image">
                            <img src="images/pic01.jpg" alt="" />
                        </span>
                        <header class="major">
                            <h3><a href="landing.html" class="link">화덕피자</a></h3>
                            <p>Ipsum dolor sit amet</p>
                        </header>
                    </article>
                    <article>
                        <span class="image">
                            <img src="images/pic02.jpg" alt="" />
                        </span>
                        <header class="major">
                            <h3><a href="landing.html" class="link">게스트하우스</a></h3>
                            <p>feugiat amet tempus</p>
                        </header>
                    </article>
                    <article>
                        <span class="image">
                            <img src="images/pic03.jpg" alt="" />
                        </span>
                        <header class="major">
                            <h3><a href="landing.html" class="link">스트롱파이어</a></h3>
                            <p>Lorem etiam nullam</p>
                        </header>
                    </article>
                    <article>
                        <span class="image">
                            <img src="images/pic04.jpg" alt="" />
                        </span>
                        <header class="major">
                            <h3><a href="landing.html" class="link">블로그</a></h3>
                            <p>Nisl sed aliquam</p>
                        </header>
                    </article>
                    <article>
                        <span class="image">
                            <img src="images/pic05.jpg" alt="" />
                        </span>
                        <header class="major">
                            <h3><a href="landing.html" class="link">서비스</a></h3>
                            <p>Ipsum dolor sit amet</p>
                        </header>
                    </article>
                    <article>
                        <span class="image">
                            <img src="images/pic06.jpg" alt="" />
                        </span>
                        <header class="major">
                            <h3><a href="landing.html" class="link">언론뉴스</a></h3>
                            <p>Feugiat amet tempus</p>
                        </header>
                    </article>
                </section>

            </div>

        </div>
    );
};

export default Main;