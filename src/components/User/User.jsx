import React from "react";
import "../User/User.scss";

const User = ({ user: { displayName, photoURL } }) => {
  return (
    <div className="user-image">
      <img src={photoURL} alt={displayName} referrerPolicy="no-referrer" />
      <span>{displayName}</span>
    </div>
  );
};

export default User;
