const EventEmitter = require('events');
const http = require('http');

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new EventEmitter();

myEmitter.on('newSale', () => {
  console.log('there was a new sale');
});

myEmitter.on('newSale', () => {
  console.log('constomer name: Nasinza');
});

myEmitter.on('newSale', (stock) => {
  console.log(`there are now ${stock} items left in stock`);
});

myEmitter.emit('newSale', 9);

///////////////////////
//when you see 'on' think of "Listen for"
const server = http.createServer(); //creating a server

server.on('request', (req, res) => {
  console.log('request received');
  console.log(req.url);
  res.end('request received');
});
server.on('request', (req, res) => {
  console.log('Another request received 😄');
});

server.on('close', () => {
  console.log('Server closed');
});

server.listen(8000, '127.0.0.1', () => {
  console.log('waiting for requests ...');
});
