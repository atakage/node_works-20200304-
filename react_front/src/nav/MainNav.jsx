import React from "react";
import { Link } from "react-router-dom";

/*
    react-router-dom Link 컴포넌트 메뉴를 구성할 때 HTML에서는 anchor tag를 사용하지만
    anchor tag를 사용하게 되면 실제로 Router의 기능을 없애는 것과 같음
    anchor tag의 링크를 클릭하게 되면 전체적으로 화면이 재로딩되는 현상이 발생하게 됨

    router의 Link 컴포넌트를 사용하게 되면 실제로는 a tag와 비슷하게 작동되지만 react-router 엔진에 의해 BrowserRouter로 묶여있는 부분만 갱신되도록 전체적인 구조가 생성됨
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
          게시글 작성
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
