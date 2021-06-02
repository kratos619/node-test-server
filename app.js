const express = require('express')
const app = express;
const port = 5000;

app.get('/',(req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World! I am your new NodeJS app! \n');
});

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
