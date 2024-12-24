const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', (ws) => {
  console.log('Client connected');

  setInterval(() => {
    ws.send(JSON.stringify({ 
      message: 'Data dari server', 
      timestamp: new Date() 
    }));
  }, 3000);

  ws.on('message', (message) => {
    console.log(`Pesan dari client: ${message}`);

    if (message.includes('alert')) {
      ws.send(JSON.stringify({ notification: 'Keyword "alert" terdeteksi!' }));
    }
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log('WebSocket server berjalan di ws://localhost:3000');
