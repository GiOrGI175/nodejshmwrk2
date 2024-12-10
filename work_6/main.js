import http from 'http';

const server = http.createServer((req, res) => {
  if (req.url === '/api') {
    const data = [
      { id: 1, name: 'Alice', age: 25, city: 'New York' },
      { id: 2, name: 'Bob', age: 30, city: 'Los Angeles' },
      { id: 3, name: 'Charlie', age: 35, city: 'Chicago' },
      { id: 4, name: 'David', age: 40, city: 'San Francisco' },
      { id: 5, name: 'Eve', age: 22, city: 'Boston' },
    ];

    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(data));
    res.end();
  }
  res.end('hello world');
});

server.listen(3000, () => {
  console.log('server running on http://localhost:3000');
});
