import {
  createCategoryService,
  deactiveCategoryService,
  deleteCategoryService,
  getCategoriesService,
  searchCategoryService,
  updateCategoryService,
} from "./category.services";

export const createCategoryController = async (req, res) => {
  try {
    const data = req.body;
    const category = await createCategoryService(data);

    res.status(200).json({
      status: "Success",
      data: category,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed to insert data",
      message: error.message,
    });
  }
};

export const getCategoriesController = async (req, res) => {
  const categories = await getCategoriesService();
  res.status(200).json({
    status: "Success",
    data: categories,
  });
};

export const searchCategoryController = async (req, res) => {
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
};

export const deactiveCategoryController = async (req, res) => {
  const id = req.params.id;
  const result = await deactiveCategoryService(id);
  res.status(200).json({
    status: "Success",
    data: result,
  });
};

export const updateCategoryController = async (req, res) => {
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
      status: "Failed to update category",
      message: error.message,
    });
  }
};

export const deleteCategoryController = async (req, res) => {
  const categoryId = req.params.id;
  const result = await deleteCategoryService(categoryId);
  res.status(200).json({
    status: "Success",
    data: result,
  });
};
