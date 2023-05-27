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
    // {
    //   $project: {
    //     name: 1,
    //     parentCategory: {
    //       $arrayElemAt: ["$parentCategory", 1],
    //     },
    //   },
    // },
  ]);

  return result;
};

export const deactiveCategoryService = async (id) => {
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
