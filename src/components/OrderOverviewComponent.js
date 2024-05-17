import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import OrderDetailComponent from "./OrderDetailComponent";

const OrderOverviewComponent = () => {
  return (
    <View style={styles.component}>
      <OrderDetailComponent />
      <View style={styles.orderOverview}>
        <TouchableOpacity style={styles.button}>Betaal</TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          Zet op rekening
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderOverviewComponent;

const styles = StyleSheet.create({
  component: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  orderOverview: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  button: {
    backgroundColor: "blue",
    color: "white",
    padding: 10,
    borderRadius: 5,
  },
});
