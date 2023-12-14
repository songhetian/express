const fs = require('fs');
const { getDB , createDB ,updateDb} = require('./../db');

exports.getAll = async (req, res) => {

  try {
    const data = await getDB();
    res.status(200).json({
      message: 'success',
      data: data
    });
  }catch(err) {
    res.status(500).json({
      status: 'error',
      message: err.message,
    })
  }
}

exports.getOne = async (req, res) => {
  try {
    const data = await getDB();
    const todo = data.todos.find(el => el.id === +req.params.id);
    res.status(200).json({
      message: 'success',
      data: todo
    });
  }catch(err) {
    res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
}

exports.createTodo = async (req, res) => {
  try {
    const db = await getDB();
    const lastId = db.todos[db.todos.length - 1].id + 1 || 1;
    db.todos.push(Object.assign({id : lastId},req.body));
    await createDB(db);
    res.status(200).json("添加成功");
  }catch(err) {
    res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
}

exports.deleteTodo = async (req, res) => {

  try {
    const data = await getDB();
    const id = data.todos.findIndex(el => el.id === +req.params.id);
    if (id === -1 ) {
      return res.status(404).json({
        status : "error",
        message : "没有找到"
      });
    }
    data.todos.splice(id, 1);
    await createDB(data);
    res.status(200).json({
      status: 'ok',
      message: "删除成功"
    });
  }catch(err){
    res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
}

exports.updateTodo = async (req, res) => {
  try {
    const db = await getDB();
    const todo = db.todos.find(el => el.id === +req.params.id);
    Object.assign(todo, req.body);
    await createDB(db);
    res.status(200).json({
      status: 'ok',
      message: "修改成功"
    })

  }catch(err){
    res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
}