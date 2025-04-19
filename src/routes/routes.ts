import { Router } from "express";
import todoController from "../api/controllers/todoController";

const router = Router();

router.get('/todos', todoController.getAllTodo);
router.post('/todos', todoController.createdTodo);
router.patch('/todos/:id', todoController.updateTodo); // corrigido
router.delete('/todos/:id', todoController.removeTodo); // corrigido

export default router;
