const express = require('express');

const app = express();
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const port = process.env.NODE_PORT;

app.get('/', (req, res) => {
  res.status(200).send('成功12');
});

app.listen(port, () => console.log(`listening on port ${port}`));
