import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';

const VirtualTryOn = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const webcamRef = useRef(null);

  const capture = () => {
    const image = webcamRef.current.getScreenshot();
    setImageSrc(image);
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h1>Virtual Try-On</h1>
      <Webcam
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width="640"
        height="480"
        style={{ marginBottom: '10px' }}
      />
      <button onClick={capture} style={{ marginBottom: '10px' }}>
        Capture
      </button>
      {imageSrc ? (
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <img src={imageSrc} alt="User" style={{ width: '100%', maxWidth: '640px', height: 'auto' }} />
          <img
            src="/glasses.png" // Replace with your overlay image
            alt="Glasses overlay"
            style={{
              position: 'absolute',
              top: '36%', // Adjust as per need
              left: '55%', // Adjust as per need
              transform: 'translate(-50%, -50%)', // Center the overlay
              width: '200px', // Adjust size as needed
              pointerEvents: 'none', // Make sure the overlay doesn't interfere with user interactions
            }}
          />
        </div>
      ) : (
        <p>No image captured</p>
      )}
    </div>
  );
};

export default VirtualTryOn;
