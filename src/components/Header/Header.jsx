import { Link } from "react-router-dom";
import "../Header/Header.scss";
import User from "../User/User";
import { useAuthContext } from "../context/AuthContext";

const Header = () => {
  const { user, login, logout } = useAuthContext();

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
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/carts">Cart</Link>
            </li>
            {user && user.isAdmin && (
              <li>
                <Link to="/products/new">New</Link>
              </li>
            )}
            {user && (
              <li>
                <User user={user} />
              </li>
            )}
            <li className="button">
              {!user && (
                <div onClick={login}>
                  <i className="xi-user-o"></i>
                  <span>Login</span>
                </div>
              )}
              {user && (
                <div onClick={logout}>
                  <i className="xi-user-o"></i>
                  <span>Logout</span>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
