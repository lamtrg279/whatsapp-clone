import "./App.css";
import { Sidebar, Chat } from "./Components";
import React, { useEffect } from "react";
import Pusher from "pusher-js";

function App() {
  useEffect(() => {
    const pusher = new Pusher("1bfc07828ea5674e0220", {
      cluster: "us2",
    });

    var channel = pusher.subscribe("messages");
    channel.bind("inserted", (data) => {
      alert(JSON.stringify(data));
    });
  }, []);

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
