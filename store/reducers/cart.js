import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart";
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

    case REMOVE_FROM_CART:
      const selectedItem = state.items[action.productId];
      console.log(selectedItem.quantity);
      if (selectedItem.quantity === 1) {
        const updatedItems = { ...state.items };
        delete updatedItems[action.productId];
        return {
          ...state,
          items: updatedItems,
          totalAmount: state.totalAmount - selectedItem.price,
        };
      } else {
        const updatedItem = {
          quantity: selectedItem.quantity - 1,
          title: selectedItem.title,
          price: selectedItem.price,
          sum: selectedItem.sum - selectedItem.price,
        };
        return {
          ...state,
          items: { ...state.items, [action.productId]: updatedItem },
          totalAmount: state.totalAmount - selectedItem.price,
        };
      }

    default:
      return state;
  }
};
