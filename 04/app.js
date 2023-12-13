const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const port = process.env.NODE_PORT;
const todoController = require('./controller/TodesController');
app.use(express.json());

app.route('/todos')
  .get(todoController.getAll)
  .post(todoController.createTodo);

app.route('/todos/:id')
  .get(todoController.getOne)
  .put(todoController.updateTodo)
  .delete(todoController.deleteTodo);

app.listen(port, () => console.log(`listening on port ${port}`));
