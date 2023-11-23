const http = require('http');
const port = process.env.PORT || 3000;
require('dotenv-flow').config()

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('Hello Node! Genup \nSECRET KEY = ' + process.env.SECRET_KEY);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
