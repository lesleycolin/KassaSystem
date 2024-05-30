import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import ItemsComponent from "../components/ItemsComponent";
import OrderOverviewComponent from "../components/orderOverview/OrderOverviewComponent";

const CashRegisterScreen = () => {
  return (
    <View style={styles.container}>
      <OrderOverviewComponent style={styles.overview} />
      <ItemsComponent style={styles.items} />
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
