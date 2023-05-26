import Category from "./category.model";

export const createCategoryService = async (data) => {
  const category = new Category(data);
  await category.save();
  return category;
};

export const getCategoriesService = async () => {
  const categories = await Category.find({}).populate({
    path: "parent",
    populate: { path: "parent", populate: "parent" },
  });
  return categories;
};

export const searchCategoryService = async (category) => {
  const result = Category.aggregate([
    {
      $match: {
        name: category,
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
    {
      $project: {
        name: 1,
        parentCategory: {
          $arrayElemAt: ["$parentCategory", 0],
        },
      },
    },
  ]);

  return result;
};
