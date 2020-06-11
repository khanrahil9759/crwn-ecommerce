export const toggleCartHidden = () => ({
  type: "toggle-cart-hidden",
});

export const addItem = (item) => ({
  type: "add-item",
  payload: item,
});
