import React from "react";
import "./LoginHeader.css";
// import { useDispatch } from "react-redux";
// import SearchIcon from "@mui/icons-material/Search";
// import HeaderOption from "./HeaderOption";
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ExploreIcon from '@mui/icons-material/Explore';

import Headericon from "./Headericon";
import SchoolIcon from '@mui/icons-material/School';
import { Button } from "@mui/material";
import Divider from '@mui/material/Divider';
// import { auth } from "./firebase";
// import { logout } from "./features/userSlice";

function LoginHeader() {
  // const dispatch = useDispatch();

  // const logoutOfApp = () => {
  //   dispatch(logout());
  //   auth.signOut();
  // };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks"
          alt="LinkedIn Logo"
         
        />
      </div>
      <div className="header__right">
        <span className="desktop">
          
          <Headericon  Icon={ExploreIcon} title="Discover" />
          <Headericon  Icon={PeopleOutlineIcon} title="People" />
          <Headericon  Icon={SchoolIcon} title="Learning" />
          <Headericon  Icon={BusinessCenterIcon} title="Jobs" />
          
        </span>
        <Divider orientation="vertical" flexItem />
        <div class="header-btn">
        <Button>Join Now</Button>

<Button variant="outlined" href="#outlined-buttons">
  Sign In
</Button>
</div>
 

      </div>
    </div>
  );
}

export default LoginHeader;
