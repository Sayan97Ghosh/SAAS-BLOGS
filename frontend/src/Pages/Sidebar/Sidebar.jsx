import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";


function Sidebar() {
//   const user = useSelector(selectUser);

  const recentItem = () => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>This is side bar</p>
      
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZR8MXx8fGVufDB8fHw%3D&w=1000&q=80"
          alt=""
        />
        <Avatar src="dummy.img" className="sidebar__avatar">
          
        </Avatar>
        {/* it is used to get the first char of email as avatar if we don't have photoURL */}
        <h2>Sayan Ghosh</h2>
        <h4>Sayan1234@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2488</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}

      </div>
    </div>
  );
}

export default Sidebar;