const express = require("express");
const tasksController = require("./controllers/tasksController");
const tasksMiddleware = require("./middleware/tasksMiddleware");

const router = express.Router();

router.get("/tasks", tasksController.getAll);
router.post("/tasks", tasksMiddleware.validateFieldTitle, tasksController.create);
router.put("/tasks/:id", tasksMiddleware.validateFieldTitle, tasksMiddleware.validateFieldStatus, tasksController.update);
router.delete("/tasks/:id", tasksController.remove);

module.exports = router;
