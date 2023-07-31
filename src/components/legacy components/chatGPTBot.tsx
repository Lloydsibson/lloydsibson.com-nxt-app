import React, { useState } from "react";
import axios from "axios";

// CURRENTLY NO FREE TIER FOR API

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<any>([]);

  const handleInputChange = (event: any) => {
    setInput(event.target.value);
  };

  const handleSendMessage = () => {
    if (input.trim() !== "") {
      const newMessage = {
        text: input,
        fromUser: true,
      };
      setMessages([...messages, newMessage]);
      setInput("");

      // Send user input to the chatbot API
      axios
        .post("...", {
          message: input,
        })
        .then((response) => {
          const botReply = {
            text: response.data.message,
            fromUser: false,
          };
          setMessages([...messages, botReply]);
        })
        .catch((error) => {
          console.error("Error sending message to ChatGPT:", error);
        });
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        {messages.map((message: any, index: any) => (
          <div
            key={index}
            className={message.fromUser ? "user-message" : "bot-message"}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
