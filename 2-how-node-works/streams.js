const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  //solution 1

  //   fs.readFile('test-file.txt', (err, data) => {
  //     if (err) console.log('err');
  //     res.end(data);
  //   });

  //solution2: streams;
  //   const readable = fs.createReadStream('testt-file.txt');
  //   readable.on('data', (chunk) => {
  //     res.write(chunk);
  //   });
  //   readable.on('end', () => {
  //     res.end();
  //   });

  //   readable.on('error', (err) => {
  //     console.log(err);
  //     res.statusCode = 500;
  //     res.end('file not found');
  //   });
  // });

  //solution 3: Pipe method
  const readable = fs.createReadStream('test-file.txt');
  readable.pipe(res); //! Recommended way of using streams, pipe method.
});
server.listen(8000, '127.0.0.1', () => {
  console.log('Listening...');
});
