import React from "react";
import { Link } from "react-router-dom";
import "../Header/Header.scss";
import { login } from "../../service/firebase";

const Header = () => {
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
            <li>
              <Link to="/products/new">new</Link>
            </li>
            <li>
              <button onClick={() => login()}>login</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
