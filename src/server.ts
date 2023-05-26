import mongoose from "mongoose";
import app from "./app";

const PORT: number = 5000;

const dbConnect = async (): Promise<void> => {
  await mongoose.connect("mongodb://127.0.0.1:27017/categories_api");
  console.log("Database Connected Successfully");
  app.listen(PORT, () => {
    console.log(`Categories Api server is running on port ${PORT}`);
  });
};

dbConnect();
