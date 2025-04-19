import { Request, Response } from "express";
import Todo from "../models/Todo";

class TodoController {
  async getAllTodo(req: Request, res: Response) {
    try {
      const todos = await Todo.find();
      return res.status(200).json(todos);
    } catch (error) {
      console.log(error);
      return res.status(500).send("Server Error");
    }
  }

  async createdTodo(req: Request, res: Response) {
    try {
      const { task } = req.body;
      if (!task) {
        return res.status(400).send("Bad Request");
      }
      const todo = new Todo({ task });
      await todo.save();
      return res.status(201).json(todo);
    } catch (error) {
      console.log(error);
      return res.status(500).send("Server Error");
    }
  }

  async updateTodo(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { finished } = req.body;
      const todo = await Todo.findByIdAndUpdate(id, { finished }, { new: true });
      return res.status(200).json(todo);
    } catch (error) {
      console.log(error);
      return res.status(500).send("Server Error");
    }
  }

  async removeTodo(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await Todo.findByIdAndDelete(id);
      return res.status(204).send();
    } catch (error) {
      console.log(error);
      return res.status(500).send("Server Error");
    }
  }
}

export default new TodoController()
