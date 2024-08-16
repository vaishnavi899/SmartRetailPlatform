import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Smart Retail Platform</h1>
        <a href="/shop">
          <button>Shop Now</button>
        </a>
      </div>
    </div>
  );
}

export default Home;
