import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ItemsComponent from "../components/ItemsComponent";
import OrderOverviewComponent from "../components/OrderOverviewComponent";

const CashRegisterScreen = () => {
  return (
    <View style={styles.container}>
      <OrderOverviewComponent />
      <ItemsComponent />
    </View>
  );
};

export default CashRegisterScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
});
