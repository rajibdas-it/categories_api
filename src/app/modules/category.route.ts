import express from "express";
import {
  createCategoryController,
  getCategoriesController,
  searchCategoryController,
} from "./category.controller";

const router = express.Router();
router.get("/", searchCategoryController);
router.post("/", createCategoryController);
router.get("/", getCategoriesController);

export default router;
