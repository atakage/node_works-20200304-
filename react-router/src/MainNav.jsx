import React from "react";
import { Link } from "react-router-dom";

/*
    react-router-dom의 Link 컴포넌트 anchor tag와 같은 일을 수행하는 tag 컴포넌트인데 a tag와 차이점은 클릭했을 때 router 부분만 갱신을 하고
    화면 전체는 새로고침을 하지 않음
*/

const MainNav = () => {
  return (
    <ul className="nav">
      <li className="nav-item">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/bbs" className="nav-link">
          BBS
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/bbs/list" className="nav-link">
          BBSLIST
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/login" className="nav-link">
          로그인
        </Link>
      </li>
    </ul>
  );
};

export default MainNav;
