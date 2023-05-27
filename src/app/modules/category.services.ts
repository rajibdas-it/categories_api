import { ICategory } from "./category.interface";
import Category from "./category.model";

export const createCategoryService = async (
  data: ICategory
): Promise<ICategory> => {
  const category = new Category(data);
  await category.save();
  return category;
};

export const getCategoriesService = async (): Promise<ICategory[]> => {
  const categories = await Category.find({}).populate({
    path: "parent",
    populate: { path: "parent", populate: "parent" },
  });
  return categories;
};

export const searchCategoryService = async (
  search: any
): Promise<ICategory[]> => {
  const result = Category.aggregate([
    {
      $match: {
        name: search,
      },
    },
    {
      $lookup: {
        from: "categories",
        localField: "parent._id",
        foreignField: "_id",
        as: "parentCategory",
      },
    },
  ]);

  return result;
};

export const getCategoryService = async (
  id: any
): Promise<ICategory | null> => {
  const category = Category.findById(id);
  return category;
};

export const deactiveCategoryService = async (
  id: any
): Promise<ICategory | null> => {
  const category = await Category.findById(id);
  if (category) {
    category.isActive = false;
    await category.save();
    const childCategories = await Category.find({ parent: id });
    for (const child of childCategories) {
      await deactiveCategoryService(child._id);
    }
  }
  return category;
};

export const updateCategoryService = async (
  categoryId: any,
  data: ICategory
): Promise<ICategory | null> => {
  const { name, parent, isActive } = data;
  const result = await Category.findByIdAndUpdate(categoryId, {
    name,
    parent,
    isActive,
  });
  return result;
};

export const deleteCategoryService = async (
  categoryId: any
): Promise<ICategory | null> => {
  const result = await Category.findByIdAndDelete(categoryId);
  return result;
};
