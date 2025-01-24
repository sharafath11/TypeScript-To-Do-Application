import express from "express";
import todoHandler from "../controllers/todoController";

const todo = new todoHandler();
const todoRoute = express.Router(); 
todoRoute.get("/", todo.getHomePage.bind(todo)); 

export default todoRoute;
