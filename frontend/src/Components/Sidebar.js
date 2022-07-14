import React from "react";
import "./Sidebar.css";
import ChatIcon from "@mui/icons-material/Chat";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Avatar, IconButton } from "@mui/material";
import SidebarChat from "./SidebarChat";

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
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat
          name={"Michael"}
          message={"See you on Monday"}
          src={
            "https://nofilmschool.com/sites/default/files/styles/facebook/public/tv-the_office_us-2005_2013-michael_scott-steve_carell-accessories-s01e01-worlds_best_boss_mug.jpg?itok=66DcbQaw"
          }
          lastSeen={"11:14 AM"}
        />
        <SidebarChat
          name={"Jim"}
          message={"You: I got to go"}
          src={
            "https://en.meming.world/images/en/6/6d/Jim_Halpert_Smiling_Through_Blinds.jpg"
          }
          lastSeen={"9:47 AM"}
        />
        <SidebarChat
          name={"Pamela"}
          message={"Ha, it's pretty funny"}
          src={
            "http://honersports.weebly.com/uploads/4/1/4/1/41412103/1468043_orig.jpg"
          }
          lastSeen={"Wed"}
        />
        <SidebarChat
          name={"Ryan"}
          message={"Hello, you're still ther.."}
          src={"https://cdn.mos.cms.futurecdn.net/4MwySDFfBLtYvJTk4VZkVh.jpg"}
          lastSeen={"Jul 06"}
        />
      </div>
    </div>
  );
};

export default Sidebar;
