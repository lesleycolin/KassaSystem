import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

const ItemButton = (props) => {
  const { logo, version, onPress } = props;

  const [selected, setSelected] = useState(0);

  const onPressHandler = () => {
    setSelected(selected + 1);
  };
  return (
    <TouchableOpacity style={styles.button} onPress={onPressHandler}>
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
    color: "white",
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
