const express = require('express');
const app = express();
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/info', (req, res) => {
  res.send('Site Info');
});

app.get('/About-me', (req, res) => {
  res.send('About Me');
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});