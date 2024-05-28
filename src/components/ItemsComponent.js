import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState } from "react";
import ItemButton from "./ItemButton";
import { myColors } from "../utilities/Colors";

const ItemsComponent = () => {
  const [items, setItems] = useState([
    {
      name: "Coca Cola",
      price: 2.5,
      logo: require("../../assets/logos/Coca-Cola.png"),
      version: "Regular",
    },
    {
      name: "Coca Cola Light",
      price: 2.5,
      logo: require("../../assets/logos/Cola-Light.png"),
      version: "Light",
    },
    {
      name: "Coca Cola Zero",
      price: 2.5,
      logo: require("../../assets/logos/Coca-Cola-Zero.png"),
      version: "Zero",
    },
    {
      name: "Fanta",
      price: 2.5,
      logo: require("../../assets/logos/Fanta.png"),
      version: "Regular",
    },
    {
      name: "Fanta Zero",
      price: 2.5,
      logo: require("../../assets/logos/Fanta-Zero.png"),
      version: "Zero",
    },
    {
      name: "Jupiler",
      price: 2.5,
      logo: require("../../assets/logos/Jupiler.png"),
      version: "Beer",
    },
    {
      name: "Heineken 00%",
      price: 2.5,
      logo: require("../../assets/logos/Heineken-0.png"),
      version: "Beer",
    },
    {
      name: "Water Plat",
      price: 2.5,
      logo: require("../../assets/logos/Spa-Blauw.png"),
      version: "Regular",
    },
    {
      name: "Water Bruis",
      price: 2.5,
      logo: require("../../assets/logos/Spa-Rood.png"),
      version: "Regular",
    },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        justifyContent="center"
        margin="auto"
        numColumns={3}
        keyExtractor={(item) => item.name.toString()}
        style={styles.itemsList}
        data={items}
        renderItem={({ item }) => (
          <ItemButton
            name={item.name}
            logo={item.logo}
            version={item.version}
            price={item.price}
          />
        )}
      />
    </View>
  );
};

export default ItemsComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.backGround,
  },
  itemsList: {
    display: "flex",
  },
});
