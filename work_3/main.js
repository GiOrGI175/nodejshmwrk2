import http from 'http';
import fs from 'fs/promises';

const server = http.createServer((req, res) => {
  //   console.log(req.url, 'url');

  if (req.url === '/random') {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    res.setHeader('Content-type', 'text/html');
    res.write(`<h1>Home Page: Random Number is ${randomNumber}</h1>`);
    res.end();
  }
  res.end('hello world');
});

server.listen(3000, () => {
  console.log('server running on http://localhost:3000');
});
