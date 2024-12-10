import http from 'http';
import fs from 'fs/promises';

const server = http.createServer(async (req, res) => {
  //   console.log(req.url, 'url');

  const users = await fs.readFile('users.json', 'utf-8');

  if (req.url === '/home') {
    res.setHeader('Content-type', 'application/html');
    res.write('<h1>Home Page</h1>');
    res.end();
  } else if (req.url === '/random') {
    res.setHeader('Content-type', 'application/json');
    res.write(JSON.stringify(users));
    res.end();
  }
  res.end('hello world');
});

server.listen(3002, () => {
  console.log('server running on http://localhost:3002');
});
