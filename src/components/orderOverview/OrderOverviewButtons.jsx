import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { myColors } from "../../utilities/Colors";
import { clearOrder, createOrder } from "../../redux/slices/orderSlice";
import { useDispatch } from "react-redux";

const OrderOverviewButtons = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleCreateOrder = async () => {
    setLoading(true);
    try {
      await dispatch(createOrder()).unwrap();
    } catch (error) {
      console.error("Failed to create order:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteOrder = () => {
    dispatch(clearOrder());
  };

  return (
    <View style={styles.orderOverview}>
      <TouchableOpacity
        style={styles.buttons}
        onPress={handleCreateOrder}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator size="small" color={myColors.primary} />
        ) : (
          <Text style={styles.buttonText}>Betaal</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons} onPress={handleDeleteOrder}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttons}
        onPress={() => {
          console.log("Op rekening gezet");
        }}
      >
        <Text style={styles.buttonText}>Rekening</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderOverviewButtons;

const styles = StyleSheet.create({
  orderOverview: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttons: {
    height: 50,
    width: 100,
    backgroundColor: myColors.focus,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginHorizontal: 0,
    marginVertical: 10,
    padding: 10,
  },
  buttonText: {
    color: myColors.primary,
    fontSize: 18,
    fontWeight: "bold",
  },
});
