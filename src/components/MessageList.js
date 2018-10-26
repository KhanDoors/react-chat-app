import React, { Component } from "react";

const Dummy_Data = [
  {
    senderId: "dude",
    text: "whats up?"
  },
  {
    senderId: "dudette",
    text: "heeyyyyy?"
  },
  {
    senderId: "bro",
    text: "hey man"
  }
];

class MessageList extends Component {
  render() {
    return (
      <div className="message-list">
        {Dummy_Data.map((message, index) => {
          return (
            <div className="message">
              <div className="message-username">{message.senderId}</div>
              <div className="message-text">{message.text}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MessageList;
