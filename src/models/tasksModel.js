const connection = require("./connection");

const getAll = async () => {
  const [tasks] = await connection.execute("SELECT * FROM tasks");
  return tasks;
}

const create = async (task) => {
  const { title } = task;
  const date = new Date().toISOString();

  const query = "INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)";
  const [createdTask] = await connection.execute(query, [title, "pendente", date]);

  return { insertId: createdTask.insertId };
}

const update = async (id, task) => {
  const { title, status } = task;
  const query = "UPDATE tasks set title = ?, status = ? WHERE id = ?";
  const [updatedTask] = await connection.execute(query, [title, status, id]);

  return updatedTask;
}

const remove = async (id) => {
  const query = "DELETE FROM tasks WHERE id = ?";
  const [deletedTask] = await connection.execute(query, [id]);

  return deletedTask;
}

module.exports = {
  getAll,
  create,
  update,
  remove,
};
