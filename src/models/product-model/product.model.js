import productSchema from "./product.schema.js";

export const getAllProducts = (filter) => {
  return productSchema.find(filter);
};
