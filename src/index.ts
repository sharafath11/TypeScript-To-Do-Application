import express from "express";
import path from "path";
import todoRoute from "./routes/todoRoute";
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use("/", todoRoute);
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
