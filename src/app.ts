import express, { Application } from "express";
import cors from "cors";
import categoryRouter from "./app/modules/category.route";

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

app.use("/api/v1/category", categoryRouter);

export default app;
