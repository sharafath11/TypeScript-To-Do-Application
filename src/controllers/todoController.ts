import express from "express";
import TodoModel from "../model/todo";

class TodoHandler {
  async getHomePage(req: express.Request, res: express.Response) {
    try {
      const todos = await TodoModel.find();
      res.render("homePage", { todos });
    } catch (error) {
      res.status(500).send("Internal Server Error");
    }
  }

  async addTodo(req: express.Request, res: express.Response) {
    try {
      const { todo } = req.body;
      const newTodo = new TodoModel({ todo, completed: false });
      await newTodo.save();
      res.status(201).json({ ok: true, msg: "Todo added successfully", todo: newTodo });
    } catch (error) {
      res.status(500).json({ ok: false, msg: "Internal Server Error" });
    }
  }

  async deleteTodo(req: express.Request, res: express.Response) {
    try {
      const { id } = req.params;
       await TodoModel.findByIdAndDelete(id);
      res.status(200).json({ ok: true, msg: "Todo deleted successfully" });
    } catch (error) {
      res.status(500).json({ ok: false, msg: "Internal Server Error" });
    }
  }

  async taskCompleted(req: express.Request, res: express.Response) {
    const { taskId } = req.body;
    try {
      const updatedTodo = await TodoModel.findByIdAndUpdate(
        taskId,
        { completed: true },
        { new: true }
      );
      res.status(200).json({ ok: true, msg: "Todo marked as completed successfully", todo: updatedTodo });
    } catch (error) {
      res.status(500).json({ ok: false, msg: "Internal Server Error" });
    }
  }

  async updateTodo(req: express.Request, res: express.Response) {
    const { taskId, todo } = req.body;
    try {
      const updatedTodo = await TodoModel.findByIdAndUpdate(
        taskId,
        { todo },
        { new: true }
      );
      res.status(200).json({ ok: true, msg: "Todo updated successfully", todo: updatedTodo });
    } catch (error) {
      res.status(500).json({ ok: false, msg: "Internal Server Error" });
    }
  }
}

export default TodoHandler;
