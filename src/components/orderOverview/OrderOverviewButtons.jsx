import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { myColors } from "../../utilities/Colors";
import { deleteOrder } from "../../redux/slices/orderSlice";
import { useDispatch } from "react-redux";

const OrderOverviewButtons = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.orderOverview}>
      <TouchableOpacity style={styles.buttons}>
        <Text style={styles.buttonText}>Betaal</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttons}
        onPress={() => dispatch(deleteOrder())}
      >
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
