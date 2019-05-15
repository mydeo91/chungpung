import React from "react";
import { Link, Redirect } from "react-router-dom";
import styles from "./styles.module.scss";
import Modal from "react-responsive-modal";
import { Link as ScrollLink } from "react-scroll";

class Header extends React.Component {
  state = {
    isClicked: false,
    isRedirect: false
  };
  _handleClick = () => {
    this.setState(prevState => ({ isClicked: !prevState.isClicked }));
  };
  _handleRedirect = path => {
    console.log(path);
    this.setState({
      isClicked: false,
      isRedirect: true
    });
  };
  render() {
    const { isClicked, isRedirect } = this.state;
    if (isRedirect) return <Redirect to="/" />;
    return (
      <header id="header" className="alt">
        <Link to="/" className="logo">
          <strong>순무아삭</strong> <span>청풍상회</span>
        </Link>
        <nav>
          <span onClick={this._handleClick}>메뉴</span>
          {isClicked && (
            <ModalBox
              open={isClicked}
              setOpen={this._handleClick}
              redirect={this._handleRedirect}
            />
          )}
        </nav>
      </header>
    );
  }
}

const ModalBox = ({ open, setOpen, redirect }) => (
  <Modal
    open={open}
    onClose={() => setOpen(false)}
    center
    classNames={{ modal: styles.container }}
  >
    <ul className={styles.links}>
      <li>
        <Link to="/guesthouse" onClick={() => setOpen(false)}>
          게스트하우스
        </Link>
      </li>
      <li>
        <Link to="/strongfire" onClick={() => setOpen(false)}>
          스트롱파이어
        </Link>
      </li>
    </ul>
    <ul class="actions stacked">
      <li>
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="button primary fit"
        >
          홈으로
        </Link>
      </li>
      <li>
        <ScrollLink
          activeClass="active"
          className="button fit"
          to="test1"
          spy={true}
          smooth={true}
          duration={500}
        >
          안녕하시갸
        </ScrollLink>
      </li>
    </ul>
  </Modal>
);

export default Header;
