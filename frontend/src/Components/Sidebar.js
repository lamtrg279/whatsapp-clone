import React from "react";
import "./Sidebar.css";
import ChatIcon from "@mui/icons-material/Chat";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Avatar, IconButton } from "@mui/material";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://media-exp1.licdn.com/dms/image/C4E03AQEGZiaZKPv6gw/profile-displayphoto-shrink_800_800/0/1624321215180?e=1661990400&v=beta&t=lbgZ-Js5adwX8wFYYdFTieqw3zo48Z-9I6Y0Tz9aaXw" />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlinedIcon />
          <input
            type="text"
            placeholder="Search or start new chat"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
