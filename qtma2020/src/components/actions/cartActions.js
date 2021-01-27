import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING,
} from "./action-types/cart-actions";

//add cart action
export const addToCart = (title, amount) => {
  return {
    type: ADD_TO_CART,
    title,
    amount,
  };
};
//remove item action
export const removeItem = (title) => {
  return {
    type: REMOVE_ITEM,
    title,
  };
};
//subtract qt action
export const subtractQuantity = (id) => {
  return {
    type: SUB_QUANTITY,
    id,
  };
};
//add qt action
export const addQuantity = (id) => {
  return {
    type: ADD_QUANTITY,
    id,
  };
};
