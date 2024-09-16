// src/components/ChatPage.js
import React, { useState } from 'react';

function ChatPage() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! How can I help you today?', sender: 'bot' },
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessages = [...messages, { id: messages.length + 1, text: input, sender: 'user' }];
      setMessages(newMessages);
      setInput('');

      // Simulate bot reply
      setTimeout(() => {
        setMessages([...newMessages, { id: messages.length + 2, text: 'Thanks for your message!', sender: 'bot' }]);
      }, 1000);
    }
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f0f0f5',
      fontFamily: "'Poppins', sans-serif",
    },
    chatBox: {
      width: '100%',
      maxWidth: '600px',
      height: '85vh',
      backgroundColor: '#ffffff',
      boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)',
      borderRadius: '20px',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      position: 'relative',
    },
    chatHeader: {
      backgroundColor: '#007BFF',
      padding: '20px',
      color: 'white',
      fontSize: '1.5em',
      textAlign: 'center',
      fontWeight: 'bold',
      borderRadius: '20px 20px 0 0',
    },
    chatBody: {
      flex: 1,
      padding: '20px',
      overflowY: 'auto',
      backgroundColor: '#f7f7f9',
    },
    chatMessage: {
      padding: '12px 18px',
      borderRadius: '12px',
      margin: '10px 0',
      maxWidth: '75%',
      wordBreak: 'break-word',
      display: 'flex',
    },
    userMessage: {
      backgroundColor: '#e1ffc7',
      alignSelf: 'flex-end',
      marginRight: '10px',
    },
    botMessage: {
      backgroundColor: '#e9e9eb',
      alignSelf: 'flex-start',
      marginLeft: '10px',
    },
    chatFooter: {
      display: 'flex',
      alignItems: 'center',
      padding: '15px',
      backgroundColor: '#ffffff',
      borderTop: '1px solid #ddd',
      borderRadius: '0 0 20px 20px',
    },
    chatInput: {
      flex: 1,
      padding: '15px',
      border: '1px solid #ddd',
      borderRadius: '50px',
      marginRight: '15px',
      fontSize: '1.1em',
      outline: 'none',
      backgroundColor: '#f9f9f9',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
    },
    chatSendButton: {
      backgroundColor: '#007BFF',
      color: 'white',
      border: 'none',
      borderRadius: '50%',
      padding: '12px',
      cursor: 'pointer',
      fontSize: '1.2em',
      outline: 'none',
      transition: 'background-color 0.3s ease',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    },
    chatSendButtonHover: {
      backgroundColor: '#0056b3',
    },
    '@media (maxWidth: 600px)': {
      chatBox: {
        width: '95%',
        height: '90vh',
      },
      chatHeader: {
        fontSize: '1.2em',
      },
      chatMessage: {
        fontSize: '0.9em',
      },
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.chatBox}>
        <div style={styles.chatHeader}>
          <h3>Fruit.Ai Chat</h3>
        </div>
        <div style={styles.chatBody}>
          {messages.map((message) => (
            <div
              key={message.id}
              style={{
                ...styles.chatMessage,
                ...(message.sender === 'user' ? styles.userMessage : styles.botMessage),
              }}
            >
              {message.text}
            </div>
          ))}
        </div>
        <div style={styles.chatFooter}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            style={styles.chatInput}
          />
          <button
            onClick={handleSendMessage}
            style={styles.chatSendButton}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.chatSendButtonHover.backgroundColor)}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.chatSendButton.backgroundColor)}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
