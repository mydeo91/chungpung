import React from "react";


const Menu = () => {
  return (
    <nav id="menu">
      <ul class="links">
        <li>
          <a href="generic.html">화덕피자</a>
        </li>
        <li>
          <a href="index.html">게스트하우스</a>
        </li>
        <li>
          <a href="landing.html">스트롱파이어</a>
        </li>
        <li>
          <a href="landing.html">서비스</a>
        </li>
        <li>
          <a href="elements.html">블로그</a>
        </li>
      </ul>
      <ul class="actions stacked">
        <li>
          <a href="#" class="button primary fit">
            연락하기
          </a>
        </li>
        <li>
          <a href="#" class="button fit">
            안녕하시갸
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
