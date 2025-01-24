import express from "express";
import path from "path";
import todoRoute from "./routes/todoRoute";
import mongoose from "mongoose";
const app = express();
mongoose
  .connect('mongodb://localhost:27017/todo-typescript')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('MongoDB connection error:', err));
  app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use("/", todoRoute);
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
