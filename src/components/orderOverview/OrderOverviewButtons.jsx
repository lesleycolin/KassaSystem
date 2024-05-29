import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { myColors } from "../../utilities/Colors";
import { deleteOrder, createOrder } from "../../redux/slices/orderSlice";
import { useDispatch } from "react-redux";

const OrderOverviewButtons = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  //Thunk async function to handle promise
  const handleCreateOrder = async () => {
    setLoading(true);
    try {
      //unwrap the promise to get original value or throw error
      await dispatch(createOrder()).unwrap();
      // Optionally show a success message or navigate to another screen
    } catch (error) {
      console.error("Failed to create order:", error);
      // Optionally show an error message
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteOrder = () => {
    dispatch(deleteOrder());
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
      <TouchableOpacity style={styles.buttons}>
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
