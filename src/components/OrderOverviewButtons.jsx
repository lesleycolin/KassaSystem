import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const OrderOverviewButtons = () => {
  return (
    <View style={styles.orderOverview}>
      <TouchableOpacity>Betaal</TouchableOpacity>
      <TouchableOpacity>Delete</TouchableOpacity>
      <TouchableOpacity>Rekening</TouchableOpacity>
    </View>
  );
};

export default OrderOverviewButtons;

const styles = StyleSheet.create({
  orderOverview: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
});
