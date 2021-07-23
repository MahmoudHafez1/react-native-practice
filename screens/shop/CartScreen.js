import React from "react";
import { Text, View, Button, StyleSheet, FlatList } from "react-native";
import CartItem from "../../components/shop/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../store/actions/cart";
import { addOrder } from "../../store/actions/orders";
import Colors from "../../constants/Colors";

const CartScreen = (props) => {
  const dispatch = useDispatch();

  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const cartItems = useSelector((state) => {
    const transformedCartItems = [];
    for (const key in state.cart.items) {
      transformedCartItems.push({
        id: key,
        title: state.cart.items[key].title,
        quantity: state.cart.items[key].quantity,
        price: state.cart.items[key].price,
        sum: state.cart.items[key].sum,
      });
    }
    return transformedCartItems;
  });

  return (
    <View style={styles.screen}>
      <View style={styles.summaryContainer}>
        <Text>
          Total:{" "}
          <Text style={styles.totalPrice}>${totalAmount.toFixed(2)}</Text>
        </Text>
        <Button
          color={Colors.primary}
          title="Order Now"
          disabled={cartItems.length === 0}
          onPress={() => {
            dispatch(addOrder(cartItems, totalAmount));
          }}
        />
      </View>
      <FlatList
        data={cartItems}
        keyExtractor={(itemData) => itemData.id}
        renderItem={(itemData) => (
          <CartItem
            title={itemData.item.title}
            quantity={itemData.item.quantity}
            price={itemData.item.sum}
            onRemove={() => {
              dispatch(removeFromCart(itemData.item.id));
            }}
          />
        )}
      />
    </View>
  );
};

CartScreen.navigationOptions = {
  headerTitle: "Cart",
};

const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
  summaryContainer: {
    marginBottom: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 8,
    borderRadius: 8,
    backgroundColor: "white",
  },
  totalPrice: {
    color: Colors.accent,
  },
});

export default CartScreen;
