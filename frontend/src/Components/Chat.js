import MoreVert from "@mui/icons-material/MoreVert";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { Avatar, IconButton } from "@mui/material";
import React from "react";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
      </div>
      <div className="chat__headerInfo">
        <h3>Room name</h3>
        <p>Last seen at ...</p>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Chat;
