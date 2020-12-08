// NO use

// INDEXoLD.js is only used once to show how to create a server from scratch

// from NODEJS.ORG                      CREATE A SERVER!!!
const http = require('http');

const hostname = '127.0.0.1';
const port = 3010;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World of Lovro'); // this will be in BROWSER http://127.0.0.1:3010/
});

server.listen(port, hostname, () => {
  console.log(`Server Lovro running at http://${hostname}:${port}/`); // this will be in console
});
