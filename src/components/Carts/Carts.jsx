import React from "react";
import "../Carts/Carts.scss";
import { useAuthContext } from "../context/AuthContext";

const Carts = () => {
  const { user } = useAuthContext();

  return (
    <div className="cart">
      {user ? <div>장바구니있음</div> : <div>로그인하고와!</div>}
    </div>
  );
};

export default Carts;
