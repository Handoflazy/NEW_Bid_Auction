const express = require('express');
const path = require('path');
const app = express();
const http = require('http')
const server = http.createServer(app);
const {Server} = require('socket.io');
const os = require('os');
const cluster = require('node:cluster');

//=============================================================
const io = new Server(server);

if (cluster.isPrimary) {
  const numCPUs = os.cpus().length;
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork({
      PORT: 3000 + i
    });
  }
}
//=============================================================

app.use(express.static(path.join(__dirname, "/css")));
app.use(express.static(path.join(__dirname, "/js")));
app.use(express.static(path.join(__dirname, "/img")));
app.use(express.static(path.join(__dirname, "/client")));
app.use(express.static(path.join(__dirname, "/router")));

const routes = require('./router/router');
app.use('/', routes);

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});

// Xử lý các kết nối Socket.IO
io.on('connection', (socket) => {
  console.log('User was connected');
  console.log(socket.id);

  // Xử lý sự kiện khi người dùng đặt giá
  socket.on('bid-price', data=>{
      console.log(data);
  });

  // Xử lý sự kiện khi người dùng ngắt kết nối
  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});