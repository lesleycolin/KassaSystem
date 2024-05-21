import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { myColors } from "../utilities/Colors";

const ItemButton = (props) => {
  const { setOrder, logo, name, price } = props;

  const [number, setNumber] = useState(0);

  const onPressHandler = () => {
    setNumber((prev) => prev + 1);
  };

  useEffect(() => {
    setOrder((prev) => {
      const index = prev.findIndex((item) => item.name === name);
      if (index === -1) {
        return [
          ...prev,
          {
            name: name,
            price: price,
            number: number,
          },
        ];
      } else {
        if (prev[index].number === number) {
          return prev; // No change in number, so return the previous state
        }
        return prev.map((item) => {
          if (item.name === name) {
            return {
              ...item,
              number: number,
            };
          } else {
            return item;
          }
        });
      }
    });
  }, [number, name, price, setOrder]); // Include all necessary dependencies

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
