import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Header/Header.scss";
import { login, logout, onUserStateChange } from "../../api/firebase";
import User from "../User/User";

const Header = () => {
  const [user, setUser] = useState();

  //사용자 로그인정보 기억하기
  useEffect(() => {
    onUserStateChange((user) => {
      console.log(user);
      setUser(user);
    });
  }, []);

  return (
    <header className="Header">
      <div className="bar">
        <div className="inner">
          <ul className="brand">
            <li>
              <div className="brand-image">
                <img
                  src={process.env.PUBLIC_URL + "./images/jordan.png"}
                  alt=""
                />
              </div>
            </li>
            <li>
              <div className="brand-image">
                <img
                  src={process.env.PUBLIC_URL + "./images/converse.png"}
                  alt=""
                />
              </div>
            </li>
          </ul>
          <ul className="util">
            <li>매장 찾기</li>
            <li>고객센터</li>
            <li>주문조회</li>
            <li>택배 서비스</li>
          </ul>
        </div>
      </div>
      <div className="container">
        <h1 className="logo">
          <Link to="/">
            <img src={process.env.PUBLIC_URL + "./images/nike.png"} alt="" />
          </Link>
        </h1>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/products">products</Link>
            </li>
            <li>
              <Link to="/carts">carts</Link>
            </li>
            {user && user.isAdmin && (
              <li>
                <Link to="/products/new">new</Link>
              </li>
            )}
            {user && (
              <li>
                <User user={user} />
              </li>
            )}
            <li className="login">
              {!user && (
                <div onClick={login}>
                  <i className="xi-user-o"></i> login
                </div>
              )}
              {user && <div onClick={logout}>logout</div>}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
