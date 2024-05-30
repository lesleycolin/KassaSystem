import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ItemButton from "./ItemButton";
import { myColors } from "../utilities/Colors";

const ItemsComponent = () => {
  const [items, setItems] = useState([
    {
      name: "Coca Cola",
      price: 2.5,
      logo: require("../../assets/logos/Coca-Cola.png"),
      category: "Soda",
      version: "Regular",
    },
    {
      name: "Coca Cola Light",
      price: 2.5,
      logo: require("../../assets/logos/Cola-Light.png"),
      category: "Soda",
      version: "Light",
    },
    {
      name: "Coca Cola Zero",
      price: 2.5,
      logo: require("../../assets/logos/Coca-Cola-Zero.png"),
      category: "Soda",
      version: "Zero",
    },
    {
      name: "Fanta",
      price: 2.5,
      logo: require("../../assets/logos/Fanta.png"),
      category: "Soda",
      version: "Regular",
    },
    {
      name: "Fanta Zero",
      price: 2.5,
      logo: require("../../assets/logos/Fanta-Zero.png"),
      category: "Soda",
      version: "Zero",
    },
    {
      name: "Jupiler",
      price: 2.5,
      logo: require("../../assets/logos/Jupiler.png"),
      category: "Beer",
      version: "Alcohol",
    },
    {
      name: "Heineken 00%",
      price: 2.5,
      logo: require("../../assets/logos/Heineken-0.png"),
      category: "Beer",
      version: "Non-alcohol",
    },
    {
      name: "Water Plat",
      price: 2.5,
      logo: require("../../assets/logos/Spa-Blauw.png"),
      category: "Soda",
      version: "Regular",
    },
    {
      name: "Water Bruis",
      price: 2.5,
      logo: require("../../assets/logos/Spa-Rood.png"),
      category: "Soda",
      version: "Regular",
    },
    {
      name: "Duff Beer",
      price: 2.5,
      logo: require("../../assets/logos/duff.jpg"),
      category: "Beer",
      version: "Alcohol",
    },
    {
      name: "Leffe blond",
      price: 2.5,
      logo: require("../../assets/logos/leffe.jpg"),
      category: "Beer",
      version: "Alcohol",
    },
    {
      name: "Stella Artois",
      price: 2.5,
      logo: require("../../assets/logos/stella.jpg"),
      category: "Beer",
      version: "Alcohol",
    },
  ]);
  const [activeFilter, setActiveFilter] = useState("All");

  // Function to filter items based on active category
  const filteredItems = items.filter((item) => {
    if (activeFilter === "All") {
      return true;
    } else {
      return item.category === activeFilter;
    }
  });

  return (
    <View style={styles.container}>
      {/* Filter tabs */}
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[
            styles.filterButton,
            activeFilter === "All" && styles.activeFilter,
          ]}
          onPress={() => setActiveFilter("All")}
        >
          <Text
            style={[
              styles.filterText,
              activeFilter === "All" && styles.activeFilterText,
            ]}
          >
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            activeFilter === "Soda" && styles.activeFilter,
          ]}
          onPress={() => setActiveFilter("Soda")}
        >
          <Text
            style={[
              styles.filterText,
              activeFilter === "Soda" && styles.activeFilterText,
            ]}
          >
            Frisdrank
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            activeFilter === "Beer" && styles.activeFilter,
          ]}
          onPress={() => setActiveFilter("Beer")}
        >
          <Text
            style={[
              styles.filterText,
              activeFilter === "Beer" && styles.activeFilterText,
            ]}
          >
            Bier
          </Text>
        </TouchableOpacity>
      </View>
      {/* Item list */}
      <FlatList
        contentContainerStyle={styles.flatListContainer}
        numColumns={3}
        keyExtractor={(item) => item.name.toString()}
        data={filteredItems}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.backGround,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  filterButton: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: myColors.primary,
    width: 80,
  },
  activeFilter: {
    backgroundColor: myColors.primary,
  },
  filterText: {
    color: myColors.primary,
  },
  activeFilterText: {
    color: myColors.white,
  },
  flatListContainer: {
    alignItems: "center",
  },
});

export default ItemsComponent;
