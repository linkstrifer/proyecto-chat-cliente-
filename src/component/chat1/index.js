import { useEffect, useState } from "react";
import io from "socket.io-client";

import Messages from "./messages.component";
import Compose from "./compose.component";

import { API } from "./constants";

const socket = io(API);
console.log("socket");

function getMessages() {
  return fetch(`${API}/channel/general`, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

function Chat() {
  const [messages, setMessages] = useState([]);

  function loadMessages() {
    getMessages()
      .then(({ messages }) => {
        setMessages(messages);
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    loadMessages();
    socket.on("newMessage", (newMessage) => {
      setMessages((messages) => [...messages, newMessage]);
    });
  }, []);

  return (
    <div className="mensajes">
      <Messages messages={messages} />
      <Compose />
    </div>
  );
}

export default Chat;
