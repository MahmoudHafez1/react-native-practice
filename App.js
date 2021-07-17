import React, { useState } from "react";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import productReducer from "./store/reducers/products";
import ShopNavigator from "./navigation/shopNavigation";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

const rootReducer = combineReducers({
  products: productReducer,
});
const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [loadFonts, setLoadFonts] = useState(false);

  if (!loadFonts) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setLoadFonts(true);
        }}
        onError={console.warn}
      />
    );
  }
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
