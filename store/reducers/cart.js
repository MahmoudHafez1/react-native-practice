import { ADD_TO_CART } from "../actions/cart";
import CartItem from "../../models/cart";

const initialState = {
  items: {},
  totalAmount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const product = action.product;
      if (state.items[product.id]) {
        const updatedCartItem = new CartItem(
          state.items[product.id].quantity + 1,
          product.price,
          product.title,
          state.items[product.id].sum + product.price
        );
        return {
          ...state,
          items: { ...state.items, [product.id]: updatedCartItem },
          totalAmount: state.totalAmount + product.price,
        };
      } else {
        const newCartItem = new CartItem(
          1,
          product.price,
          product.title,
          product.price
        );
        return {
          ...state,
          items: { ...state.items, [product.id]: newCartItem },
          totalAmount: state.totalAmount + product.price,
        };
      }

    default:
      return state;
  }
};
