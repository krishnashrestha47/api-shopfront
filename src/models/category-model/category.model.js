import categorySchema from "./category.schema.js";

const getAllCategories = () => {
  return categorySchema.find();
};
