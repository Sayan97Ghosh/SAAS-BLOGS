/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import {News} from "../Widgets/Widgets"
import "./Feed.css";





import FlipMove from "react-flip-move";
import InputOption from "../Input/InputOption";
// import Post from "../Post/Post";
import { Container } from "@mui/joy";
import Sidebar from "../Sidebar/Sidebar";
import { Newspaper } from "@mui/icons-material";

function Feed() {


  /* establishing connection to the firebase */
  
  return (
    <Container style={{display:"flex"}}>
        {/* here thw side bar */}
        <Sidebar/>
    <div className="feed">
      {/* Input Container */}
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
             
              type="text"
            />
            <button type="submit">
              Send
            </button>
          </form>
        </div>

        {/* User Post Options */}

        <div className="feed__inputOptions">
          {/* InputOption */}
          <InputOption title="Photo" Icon={ImageIcon} color="#70B5F9" />
          <InputOption title="Video" Icon={SubscriptionsIcon} color="#e7a33e" />
          <InputOption title="Event" Icon={EventNoteIcon} color="#c0cbcd" />
          <InputOption
            title="Write"
            Icon={CalendarViewDayIcon}
            color="#7fc15e"
          />
        </div>
      </div>
      {/* Posts Container */}
      {/* <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={
              id
            } 
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove> */}
    </div>
    <News/>
    </Container>
  );
}

export default Feed;
