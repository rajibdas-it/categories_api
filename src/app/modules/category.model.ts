import mongoose, { Schema, model } from "mongoose";
import { ICategory } from "./category.interface";

const categorySchema = new Schema<ICategory>({
  name: { type: String, required: true, trim: true, unique: true }, //index: true
  parent: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    default: null,
  },
  isActive: { type: Boolean, required: true, default: true },
});

const Category = model<ICategory>("Category", categorySchema);

export default Category;
