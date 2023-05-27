import express, { Application, Request, Response } from "express";
import cors from "cors";
import categoryRouter from "./app/modules/category.route";

const app: Application = express();

//using cors
app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//basic get route
app.get("/", (req: Request, res: Response) => {
  res.send("welcome");
});

//API Route

app.use("/api/v1/category", categoryRouter);

export default app;
