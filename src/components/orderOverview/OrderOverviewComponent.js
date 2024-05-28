import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import OrderOverviewButtons from "./OrderOverviewButtons";
import ProductTable from "./ProductTable";
import { ScrollView } from "react-native-gesture-handler";

const OrderOverviewComponent = ({ order, setOrder }) => {
  return (
    <View style={styles.orderOverview}>
      <ProductTable />
      <OrderOverviewButtons />
    </View>
  );
};

export default OrderOverviewComponent;

const styles = StyleSheet.create({
  orderOverview: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 10,
  },
  // button: {
  //   backgroundColor: "blue",
  //   color: "white",
  //   padding: 10,
  //   borderRadius: 5,
  // },
});
