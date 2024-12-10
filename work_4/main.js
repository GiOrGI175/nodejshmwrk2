import http from 'http';
import fs from 'fs/promises';

const server = http.createServer((req, res) => {
  //   console.log(req.url, 'url');

  if (req.url === '/table') {
    res.setHeader('Content-type', 'text/html');
    const table = `
    <h1>Simple HTML Table</h1>
    <table border="1" cellpadding="10">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Alice</td>
          <td>25</td>
          <td>New York</td>
        </tr>
        <tr>
          <td>Bob</td>
          <td>30</td>
          <td>Los Angeles</td>
        </tr>
        <tr>
          <td>Charlie</td>
          <td>35</td>
          <td>Chicago</td>
        </tr>
      </tbody>
    </table>
  `;

    res.write(table);
    res.end();
  }
  res.end('hello world');
});

server.listen(3000, () => {
  console.log('server running on http://localhost:3000');
});
