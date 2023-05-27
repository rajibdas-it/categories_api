import { Request, Response } from "express";
import {
  createCategoryService,
  deactiveCategoryService,
  deleteCategoryService,
  getCategoriesService,
  getCategoryService,
  searchCategoryService,
  updateCategoryService,
} from "./category.services";

export const createCategoryController = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const category = await createCategoryService(data);
    res.status(200).json({
      status: "Success",
      data: category,
    });
  } catch (error) {
    res.status(404).json({
      status: "Failed to insert data",
      message: error.message,
    });
  }
};

export const getCategoriesController = async (req: Request, res: Response) => {
  try {
    const categories = await getCategoriesService();
    res.status(200).json({
      status: "Success",
      data: categories,
    });
  } catch (error) {
    res.status(404).json({
      status: "Failed to Fetch Data",
      message: error.message,
    });
  }
};

export const searchCategoryController = async (req: Request, res: Response) => {
  try {
    if (req.query.category) {
      const category = req.query.category;
      const result = await searchCategoryService(category);
      res.status(200).json({
        status: "Success",
        data: result,
      });
    } else {
      const result = await getCategoriesService();
      res.json(result);
    }
  } catch (error) {
    res.status(404).json({
      status: "Failed to Fetch Data",
      message: error.message,
    });
  }
};

export const getCategoryController = async (req: Request, res: Response) => {
  try {
    const categoryId = req.params.id;
    const category = await getCategoryService(categoryId);
    res.status(200).json({
      status: "Success",
      data: category,
    });
  } catch (error) {
    res.status(404).json({
      status: "Failed to Fetch Data",
      message: error.message,
    });
  }
};

export const deactiveCategoryController = async (
  req: Request,
  res: Response
) => {
  try {
    const id = req.params.id;
    const result = await deactiveCategoryService(id);
    res.status(200).json({
      status: "Success",
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      status: "Failed to Deactivate Categories",
      message: error.message,
    });
  }
};

export const updateCategoryController = async (req: Request, res: Response) => {
  try {
    // console.log(categoryId);
    // console.log(data);
    const categoryId = req.params.id;
    const data = req.body;
    const result = await updateCategoryService(categoryId, data);
    res.status(200).json({
      status: "Success",
      data: result,
      message: "Category Updated Successfully",
    });
  } catch (error) {
    res.status(404).json({
      status: "Failed to Update Category",
      message: error.message,
    });
  }
};

export const deleteCategoryController = async (req: Request, res: Response) => {
  try {
    const categoryId = req.params.id;
    const result = await deleteCategoryService(categoryId);
    res.status(200).json({
      status: "Success",
      data: result,
      message: "Category Deleted Successfully",
    });
  } catch (error) {
    res.status(404).json({
      status: "Failed to Delete Category",
      message: error.message,
    });
  }
};
