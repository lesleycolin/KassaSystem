import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import ItemsComponent from "../components/ItemsComponent";
import OrderOverviewComponent from "../components/orderOverview/OrderOverviewComponent";

const CashRegisterScreen = () => {
  const [order, setOrder] = useState([]);

  return (
    <View style={styles.container}>
      <OrderOverviewComponent order={order} />
      <ItemsComponent setOrder={setOrder} />
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
