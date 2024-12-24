const WebSocket = require('ws');
const ws = new WebSocket('ws://localhost:3000');

ws.on('open', () => {
  console.log('Terhubung ke WebSocket server');

  ws.send('Halo Server! Keyword: alert');

  ws.send('get_logs');
});

ws.on('message', (data) => {
  const response = JSON.parse(data);

  if (response.logs) {
    console.log('Data logs dari server:', response.logs);
  } else if (response.notification) {
    console.log('Notifikasi dari server:', response.notification);
  } else {
    console.log('Pesan lain dari server:', response);
  }
});

ws.on('error', (err) => {
  console.error('Error WebSocket:', err);
});

ws.on('close', () => {
  console.log('Koneksi WebSocket ditutup');
});
