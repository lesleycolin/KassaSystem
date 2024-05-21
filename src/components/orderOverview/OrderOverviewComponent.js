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

const OrderOverviewComponent = ({ order }) => {
  return (
    <View style={styles.orderOverview}>
      <ProductTable order={order} />
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