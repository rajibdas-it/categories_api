import express from "express";
import {
  createCategoryController,
  deactiveCategoryController,
  deleteCategoryController,
  getCategoriesController,
  searchCategoryController,
  updateCategoryController,
} from "./category.controller";

const router = express.Router();
router.get("/", searchCategoryController);
router.patch("/:id/deactivate", deactiveCategoryController);
router.post("/", createCategoryController);
router.get("/", getCategoriesController);
router.patch("/edit/:id", updateCategoryController);
router.delete("/delete/:id", deleteCategoryController);

export default router;
