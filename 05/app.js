const express = require('express');

const app = express();
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const port = process.env.NODE_PORT;

app.use((req,res,next) => {
  req.foo = "one";
  console.log(req.method,req.url,Date.now());
  next();
});
app.get('/', (req, res) => {
  console.log(req.foo);
  res.status(200).send('get /');
});

app.post('/', (req, res) => {
  res.status(200).send('post login');
});

app.get(
  "/user/:id",
  (req, res, next) => {
    if (req.params.id === "0") next("route");
    else next();
  },
  (req, res, next) => {
      next();
    //res.send("regular");
  }
);

app.get("/user/:id", (req, res, next) => {
  console.log(123);
 next();
});

app.get("/user/:id", (req, res) => {
  res.send("special");
});

app.get('/about', (req, res) => {
  console.log(req.foo);
  res.status(200).send('get about');
});

app.listen(port, () => console.log(`listening on port ${port}`));
