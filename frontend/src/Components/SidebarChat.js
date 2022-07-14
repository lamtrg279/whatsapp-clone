import React from "react";
import "./SidebarChat.css";
import { Avatar } from "@mui/material";

const SidebarChat = ({ name, message, src }) => {
  return (
    <div className="sidebarChat">
      <Avatar src={src} />
      <div className="sidebarChat__info">
        <h2>{name}</h2>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default SidebarChat;
