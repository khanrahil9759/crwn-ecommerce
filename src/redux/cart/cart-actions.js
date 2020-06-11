export const toggleCartHidden = () => ({
  type: "toggle-cart-hidden",
});

export const addItem = (item) => ({
  type: "add-item",
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: "clear-item",
  payload: item,
});

export const removeItem = (item) => ({
  type: "remove-item",
  payload: item,
});
