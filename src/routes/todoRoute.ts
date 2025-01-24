import express from "express";
import todoHandler from "../controllers/todoController";

const todo = new todoHandler();
const todoRoute = express.Router(); 
todoRoute.get("/", todo.getHomePage.bind(todo)); 
todoRoute.post("/addTodo",todo.addTodo.bind(todo))
todoRoute.delete("/deleteTodo/:id", todo.deleteTodo.bind(todo));
todoRoute.post("/completeTodo",todo.taskCompleted.bind(todo))
todoRoute.post("/editTodo",todo.updateTodo.bind(todo))

export default todoRoute;
