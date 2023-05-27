import mongoose, { Schema, model } from "mongoose";
import { ICategory } from "./category.interface";

// const categorySchema = new Schema({
//   name: {
//     type: String,
//     unique: true,
//     required: true,
//     trim: true,
//   },
//   parent: {
//     type: Schema.Types.ObjectId,
//     ref: "Category",
//     default: null,
//   },
//   children: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: "Category",
//     },
//   ],
//   isActive: {
//     type: Boolean,
//     default: true,
//   },
// });

// const Category = model("Category", categorySchema);
// export default Category;

const categorySchema = new Schema({
  name: { type: String, required: true, trim: true, unique: true },
  parent: { type: Schema.Types.ObjectId, ref: "Category", default: null },

  isActive: { type: Boolean, default: true },
});

const Category = mongoose.model("Category", categorySchema);

export default Category;
