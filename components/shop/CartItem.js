import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../constants/Colors";

const CartItem = (props) => {
  return (
    <View style={styles.cartItem}>
      <View style={styles.itemData}>
        <Text style={styles.quantity}>{props.quantity}</Text>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View style={styles.itemData}>
        <Text style={styles.price}>${props.price.toFixed()}</Text>
        <TouchableOpacity onPress={props.onRemove}>
          <Ionicons color={"red"} size={23} name={"trash"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemData: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
    marginLeft: 10,
  },
  price: {
    fontFamily: "open-sans",
    fontSize: 16,
    marginRight: 10,
  },
});

export default CartItem;
