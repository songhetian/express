const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('成功1');
});

app.listen(3000, function () {
  console.log('链接成功');
});
