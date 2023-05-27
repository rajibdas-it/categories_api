import express from "express";
import {
  createCategoryController,
  deactiveCategoryController,
  getCategoriesController,
  searchCategoryController,
} from "./category.controller";

const router = express.Router();
router.get("/", searchCategoryController);
router.post("/", createCategoryController);
router.get("/", getCategoriesController);
router.patch("/:id/deactivate", deactiveCategoryController);

export default router;
