const http = require('http');

const server = http.createServer((req, res) => {
  doSomethingAsync()
    .then(() => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('OK');
    })
    .catch(error => {
      console.error('Error:', error);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    });
});

async function doSomethingAsync() {
  const random = Math.random();
  if (random < 0.5) {
    throw new Error('Something went wrong!');
  }
  await new Promise(resolve => setTimeout(resolve, 1000));
}

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});