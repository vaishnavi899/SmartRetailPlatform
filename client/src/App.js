import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import PopupChatbot from './components/PopupChatbot'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <PopupChatbot />
    </Router>
  );
}

export default App;


