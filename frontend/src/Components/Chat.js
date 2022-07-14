import MoreVert from "@mui/icons-material/MoreVert";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MicIcon from "@mui/icons-material/Mic";
import SendIcon from "@mui/icons-material/Send";
import { Avatar, IconButton } from "@mui/material";
import React, { useState } from "react";
import axios from "../axios";
import "./Chat.css";

const Chat = ({ messages }) => {
  const [input, setInput] = useState("");
  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post("/messages", {
      message: input,
      name: "Lam", //TODO: Implement authorization so that the name appears to be the actual user's name
      timestamp: new Date().toUTCString(),
      receiver: false,
    });

    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src="https://scontent-msp1-1.xx.fbcdn.net/v/t1.15752-9/289987122_415067473997124_6890450480675457117_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=jpts4PLuc5YAX_7UWsK&_nc_ht=scontent-msp1-1.xx&oh=03_AVI_wvyoyqqSjuNP6oDuD1S8drvQ4kYGmLaZZqZ-wEJIpQ&oe=62D16413" />
        <div className="chat__headerInfo">
          <h3>Stella</h3>
          <p>Last seen at {new Date().toUTCString()}</p>
        </div>
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
      <div className="chat__body">
        {messages.map((message) => (
          <p
            className={`chat__message ${!message.receiver && "chat__receiver"}`}
          >
            <span className="chat__name">{message.name}</span>
            {message.message}
            <span className="chat__timestamp">{message.timestamp}</span>
          </p>
        ))}
      </div>

      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Aa"
          />
          <button onClick={sendMessage} type="submit">
            <IconButton>
              <SendIcon />
            </IconButton>
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
};

export default Chat;
