import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
// import React, { useState, useEffect } from "react";
import { myColors } from "../utilities/Colors";

//redux imports
import { useSelector, useDispatch } from "react-redux";
import { addItem, addToOrder } from "../redux/slices/orderSlice";

const ItemButton = (props) => {
  const order = useSelector((state) => state.order.products);
  const dispatch = useDispatch();

  const { logo, name, price } = props;

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => dispatch(addToOrder({ name, price }))}
    >
      <Image source={logo} style={{ maxWidth: 100, height: 100 }} />
    </TouchableOpacity>
  );
};

export default ItemButton;

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  buttonText: {
    color: myColors.primary,
    fontSize: 16,
    fontWeight: "bold",
  },
  regularColor: {
    backgroundColor: "#0E82E8",
  },
  lightColor: {
    backgroundColor: "#889EB2",
  },
  zeroColor: {
    backgroundColor: "#0B3961",
  },
  beerColor: {
    backgroundColor: "yellow",
  },
});
