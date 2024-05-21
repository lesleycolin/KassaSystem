import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import OrderDetail from "./OrderDetail";
import { ScrollView } from "react-native-gesture-handler";

const ProductTable = ({ order }) => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(
      order.reduce((acc, product) => acc + product.price * product.number, 0)
    );
  }, [order]);
  return (
    <View>
      <Text>Bestelling</Text>
      <ScrollView style={styles.scrollView}>
        <OrderDetail order={order} />
      </ScrollView>
      <Text style={styles.totaal}>Totaal: {total} Euro</Text>
    </View>
  );
};

export default ProductTable;

const styles = StyleSheet.create({
  totaal: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "right",
  },
  scrollView: {
    height: 100,
  },
});
