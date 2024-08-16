import React from 'react';
import './Cards.css';

function Cards() {
  return (
    <div className="cards-container">
      <div className="card">
        <a href="/in-store/scan-qr">
          <h3>In-Store Features</h3>
          <p>Explore in-store features like scanning QR codes for product details.</p>
        </a>
      </div>
      <div className="card">
        <a href="/recommendations">
          <h3>Personalized Recommendations</h3>
          <p>Get personalized product recommendations based on your preferences.</p>
        </a>
      </div>
      <div className="card">
        <a href="/virtual-try-on">
          <h3>Virtual Try-On</h3>
          <p>Try on products virtually using our advanced AR technology.</p>
        </a>
      </div>
    </div>
  );
}

export default Cards;
