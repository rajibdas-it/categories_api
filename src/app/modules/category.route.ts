import express from "express";
import {
  createCategoryController,
  deactiveCategoryController,
  deleteCategoryController,
  getCategoriesController,
  getCategoryController,
  searchCategoryController,
  updateCategoryController,
} from "./category.controller";

const router = express.Router();
router.get("/", searchCategoryController);
router.patch("/:id/deactivate", deactiveCategoryController);
router.post("/", createCategoryController);
router.get("/", getCategoriesController);

//routing by id
router.get("/:id", getCategoryController);
router.patch("/edit/:id", updateCategoryController);
router.delete("/delete/:id", deleteCategoryController);

export default router;
