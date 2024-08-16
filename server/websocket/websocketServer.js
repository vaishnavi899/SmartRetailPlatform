const WebSocket = require('ws');
const http = require('http');

// Create an HTTP server
const server = http.createServer();

// Create a WebSocket server
const wss = new WebSocket.Server({ server });

// Handle incoming WebSocket connections
wss.on('connection', (ws) => {
  console.log('Client connected');

  // Handle incoming messages
  ws.on('message', (message) => {
    console.log('Received message:', message);
    // Echo the message back to the client
    ws.send(`Received: ${message}`);
  });

  // Handle connection close
  ws.on('close', () => {
    console.log('Client disconnected');
  });

  // Handle error
  ws.on('error', (error) => {
    console.error('WebSocket error:', error);
  });
});

// Export the WebSocket server for integration
module.exports = { server, wss };
