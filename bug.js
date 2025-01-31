const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might fail
  doSomethingAsync().then(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('OK');
  }).catch(error => {
    // The error is not handled properly here.
    console.error('Error:', error);
  });
});

async function doSomethingAsync() {
  // Simulate an asynchronous operation that sometimes throws an error
  // For example, it could be a database query or an external API call
  const random = Math.random();
  if (random < 0.5) {
    throw new Error('Something went wrong!');
  }
  // Simulate a successful asynchronous operation
  await new Promise(resolve => setTimeout(resolve, 1000));
}

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});