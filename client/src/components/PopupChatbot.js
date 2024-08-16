import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import './PopupChatbot.css'; 

function PopupChatbot() {
  const [opened, setOpened] = useState(false);

  const steps = [
    {
      id: '1',
      message: 'Hello! How can I assist you today?',
      trigger: 'user-response',
    },
    {
      id: 'user-response',
      user: true,
      trigger: '2',
    },
    {
      id: '2',
      message: 'You said: "{previousValue}". How else can I help you?',
      trigger: 'user-response',
    },
  ];

  const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#007bff',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#007bff',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };

  const toggleChatbot = () => {
    setOpened(!opened);
  };

  return (
    <div className="chatbot-container">
      {opened && (
        <ThemeProvider theme={theme}>
          <ChatBot
            steps={steps}
            headerTitle="Smart Retail Assistant"
            floating={false}
            opened={opened}
            toggleFloating={toggleChatbot}
          />
        </ThemeProvider>
      )}
      <button className="chatbot-button" onClick={toggleChatbot}>
        {opened ? 'Close' : 'Chat'}
      </button>
    </div>
  );
}

export default PopupChatbot;

