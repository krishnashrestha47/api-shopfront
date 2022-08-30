import productSchema from "./product.schema.js";

export const getAllProducts = (filter) => {
  return productSchema.find(filter);
};

export const getProductsByCategory = (ids) => {
  return productSchema.find({
    catId: {
      $in: ids,
    },
  });
};
