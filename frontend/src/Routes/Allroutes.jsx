import React from "react";

import {Routes,Route} from "react-router-dom";
import Feed from "../Pages/Feed/Feed";
import Login from "../Pages/Auth/Login";
import SignUp from "../Pages/Auth/Signup";



function Allroutes () {
    return(
        <>
        
        <Routes>
          <Route path = "/feed" element={<Feed/>}/>
          <Route path = "/login" element={<Login/>}/>
          <Route path = "/" element={<SignUp/>}/>
        </Routes>
        </>
    )
}

export {Allroutes};