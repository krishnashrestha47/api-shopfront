import categorySchema from "./category.schema.js";

export const getAllCategories = () => {
  return categorySchema.find();
};
