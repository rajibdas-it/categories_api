import express, { Application } from "express";
import cors from "cors";

const app: Application = express();

//using cors
app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//basic get route
app.get("/", (req, res) => {
  res.send("welcome");
});

export default app;
