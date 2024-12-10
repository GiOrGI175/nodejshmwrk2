import http from 'http';
import fs from 'fs/promises';

const server = http.createServer((req, res) => {
  //   console.log(req.url, 'url');

  if (req.url === '/current-time') {
    const currentTime = new Date().toISOString();

    res.setHeader('Content-Type', 'application/json');

    res.write(JSON.stringify({ currentTime }));
    res.end();
  }
  res.end('hello world');
});

server.listen(3000, () => {
  console.log('server running on http://localhost:3000');
});
