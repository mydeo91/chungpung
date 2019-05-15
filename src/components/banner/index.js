import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Banner = ({ location: { pathname } }) => {
  if (pathname === "/") {
    return MainBanner;
  } else {
    return new PageBanner(pathname);
  }
};

const MainBanner = (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>청풍상회에 오신 것을 환영합니다.</h1>
      </header>
      <div className="content">
        <p>
          청풍상회는 강화도 내 청년들이 자립할 수 있는 문화와
          <br />
          경제기반을 만들어 가는 팀으로 하루하루 즐겁게 살고 있습니다.
        </p>
        <ul className="actions">
          <li>
            <ScrollLink
              activeClass="active"
              className="button next"
              to="test1"
              spy={true}
              smooth={true}
              duration={500}
            >
              안녕하시갸
            </ScrollLink>
            {/* <a href={e => e.preventDefault()} className="button next scrolly">
              안녕하시갸!
            </a> */}
          </li>
        </ul>
      </div>
    </div>
  </section>
);

class PageBanner extends React.Component {
  constructor(props) {
    super(props);
    let pageInfo = {};
    switch (props) {
      case "/guesthouse":
        pageInfo = {
          title: "게스트하우스",
          subTitle: "게스트하우스입니다.",
          titleImg: require("../../styles/images/bg-guesthouse.jpg")
        };
        break;
      case "/strongfire":
        pageInfo = {
          title: "스트롱파이어",
          subTitle: "스트롱파이어입니다.",
          titleImg: require("../../styles/images/bg-strong.jpg")
        };
        break;

      default:
        break;
    }
    this.state = pageInfo;
  }
  render() {
    const { title, subTitle, titleImg } = this.state;
    return (
      <section id="banner" className="style2">
        <div className="inner">
          <span className="image">
            <img src={titleImg} alt={title} />
          </span>
          <header className="major">
            <h1>{title}</h1>
          </header>
          <div className="content">
            <p>{subTitle}</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Banner;
