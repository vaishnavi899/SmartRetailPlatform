const express = require('express');
const http = require('http');
const cors = require('cors');
const connectDB = require('./config/db');
const productRoutes = require('./routes/products'); // Import product routes using CommonJS
const { server: wsServer } = require('./websocket/websocketServer'); // Import the WebSocket server using CommonJS

const app = express();
const PORT = 8081;

// Connect to the database
connectDB();

// Create an HTTP server
const server = http.createServer(app);

// Integrate the WebSocket server with the HTTP server
wsServer.listen(PORT, () => {
  console.log(`WebSocket server is listening on ws://localhost:${PORT}`);
});

// Middleware and routes setup
app.use(cors()); // Enable CORS
app.use(express.json());
app.use('/api/products', productRoutes);

// Define your routes here
app.get('/', (req, res) => {
  res.send('Express server is running');
});

// Add additional routes
// app.use('/api/some-route', require('./routes/someRoute'));

// Start the HTTP server
server.listen(8080, () => {
  console.log(`HTTP server is running on port 8080`);
});


