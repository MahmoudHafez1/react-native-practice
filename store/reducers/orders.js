import { ADD_ORDER } from "../actions/orders";
import Order from "../../models/order";

const initialState = {
  orders: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      const items = action.itemsData.items;
      const amount = action.itemsData.amount;
      const newOrder = new Order(
        new Date().toString(),
        items,
        amount,
        new Date()
      );
      return {
        ...state,
        orders: state.orders.concat(newOrder),
      };

    default:
      return state;
  }
};
