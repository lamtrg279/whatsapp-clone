import React from "react";
import "./SidebarChat.css";
import { Avatar } from "@mui/material";

const SidebarChat = ({ name, message, src, lastSeen }) => {
  return (
    <div className="sidebarChat">
      <Avatar src={src} />
      <div className="sidebarChat__info">
        <h2>{name}</h2>
        <div className="container">
          <div className="first">{message} </div>
          <div className="second"> {lastSeen}</div>
        </div>
      </div>
    </div>
  );
};

export default SidebarChat;
