export const addToCart = product => {
console.log(product);
  return { type: "ADD_TO_CART", data: product };
};

export const removeFromCart = index => {
  return { type: "REMOVE_FROM_CART", data: index };
};
