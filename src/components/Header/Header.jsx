import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../Header/Header.scss";

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
          </ul>
        </div>
      </div>
      <div className="container">
        <h1 className="logo">
          <NavLink to="/">
            <img src={process.env.PUBLIC_URL + "./images/nike.png"} alt="" />
          </NavLink>
        </h1>
        <nav className="nav">
          <ul>
            <li>
              <NavLink to="/products">products</NavLink>
            </li>
            <li>
              <NavLink to="/carts">carts</NavLink>
            </li>
            <li>
              <NavLink to="/products/new">new</NavLink>
            </li>
            <li>
              <NavLink>login</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
