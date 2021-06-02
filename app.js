const express = require('express')
const port = 5000;
const app  =  express()
app.get('/',(req, res) => {
  res.end('Hello World! I am your new NodeJS app! \n');
});

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
