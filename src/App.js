import React, { Component } from "react";
import MessageList from "./components/MessageList";
import Chatkit from "@pusher/chatkit-server";
import { tokenUrl, instanceLocator } from "./config";

import "./App.css";

class App extends Component {
  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: instanceLocator,
      userId: "syyad",
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl
      })
    });

    chatManager.connect().then(currentUser => {
      currentUser.subsribeToRoom({
        roomId: 19372267,
        hooks: {
          onNewMessage: message => {
            console.log("message.text: ", message.text);
          }
        }
      });
    });
  }

  render() {
    return (
      <div className="App">
        <MessageList />
      </div>
    );
  }
}

export default App;
