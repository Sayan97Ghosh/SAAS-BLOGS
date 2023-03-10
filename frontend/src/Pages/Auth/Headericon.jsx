import { Avatar } from "@mui/material";
import React from "react";
// import { useSelector } from "react-redux";
// import { selectUser } from "./features/userSlice";
import "./Headericon.css";

function Headericon({ avatar, Icon, title, onClick }) {
  // here icon is a component and title is a variable
  // const user = useSelector(selectUser);
  return (
    <div className="headerOption" onClick={onClick}>
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar className="headerOption__icon" >
          {/* src={user?.photoUrl}{user?.email[0]} */}
        </Avatar>
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default Headericon;
