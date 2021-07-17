import React from "react";
import {
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
import Colors from "../../constants/Colors";
import { Platform } from "react-native";

let TouchableCmp = TouchableOpacity;

if (Platform.OS === "android" && Platform.Version >= 2) {
  TouchableCmp = TouchableNativeFeedback;
}

const ProductItem = (props) => {
  return (
    <View style={styles.product}>
      <View style={styles.touchable}>
        <TouchableCmp onPress={props.onViewDetail} useForeground>
          <View>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: props.image }} />
            </View>
            <View style={styles.detailContainer}>
              <View style={styles.detail}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.price}>${props.price}</Text>
              </View>
              <View style={styles.actions}>
                <Button
                  title="To Cart"
                  color={Colors.primary}
                  onPress={props.onAddCart}
                />
                <Button
                  title="View Detail"
                  color={Colors.primary}
                  onPress={props.onViewDetail}
                />
              </View>
            </View>
          </View>
        </TouchableCmp>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    elevation: 5,
    borderRadius: 10,
    margin: 20,
    height: 300,
    backgroundColor: "white",
  },
  touchable: {
    borderRadius: 10,
    overflow: "hidden",
  },
  imageContainer: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  detailContainer: {
    height: "40%",
  },
  title: {
    fontSize: 18,
    marginVertical: 10,
  },
  detail: {
    alignItems: "center",
  },
  actions: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default ProductItem;
