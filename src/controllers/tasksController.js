const tasksModel = require("../models/tasksModel");

const getAll = async (_, response) => {
  const tasks = await tasksModel.getAll();
  return response.status(200).json(tasks);
}

const create = async (request, response) => {
  const createdTask = await tasksModel.create(request.body);

  return response.status(201).json(createdTask);
}

const update = async (request, response) => {
  const { id } = request.params;
  await tasksModel.update(id, request.body);

  return response.status(204).json();
}

const remove = async (request, response) => {
  const { id } = request.params;
  await tasksModel.remove(id);

  return response.status(204).json();
}

module.exports = {
  getAll,
  create,
  update,
  remove,
}
