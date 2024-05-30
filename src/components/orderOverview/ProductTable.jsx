import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import OrderDetail from "./OrderDetail";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";

const ProductTable = () => {
  const total = useSelector((state) => state.order.totalPrice);
  return (
    <View>
      <Text style={styles.bestelling}>Bestelling</Text>
      <ScrollView style={styles.scrollView}>
        <OrderDetail />
      </ScrollView>
      <Text style={styles.totaal}>Totaal: {total} Euro</Text>
    </View>
  );
};

export default ProductTable;

const styles = StyleSheet.create({
  bestelling: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  totaal: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "right",
  },
  scrollView: {
    height: 100,
    borderColor: "black",
    borderWidth: 1,
  },
});
