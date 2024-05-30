import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../FirebaseConfig";
import { myColors } from "../utilities/Colors";

// Enable LayoutAnimation on Android
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const OverviewScreen = () => {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const [expandedOrder, setExpandedOrder] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersQuery = query(
          collection(db, "orders"),
          orderBy("createdAt", "desc")
        );
        const ordersSnapshot = await getDocs(ordersQuery);
        const ordersData = ordersSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrders(ordersData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const toggleExpandOrder = (orderId) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  if (loading) {
    return <ActivityIndicator size="large" color={myColors.focus} />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.orderItem}>
            <TouchableOpacity
              onPress={() => toggleExpandOrder(item.id)}
              style={styles.orderHeader}
            >
              <Text style={styles.orderTitle}>
                Order:{" "}
                {new Date(item.createdAt.seconds * 1000).toLocaleDateString(
                  "en-US",
                  {
                    weekday: "long",
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  }
                )}
              </Text>
            </TouchableOpacity>
            {expandedOrder === item.id && (
              <View style={styles.orderDetails}>
                <Text style={styles.productsTitle}>Products:</Text>
                {item.products.map((product, index) => (
                  <View key={index} style={styles.productItem}>
                    <Text>Name: {product.name}</Text>
                    <Text>Price: {product.price}</Text>
                    <Text>Quantity: {product.quantity}</Text>
                    <Text>Total: {product.total}</Text>
                  </View>
                ))}
                <Text style={styles.totalPrice}>
                  Total Price: {item.totalPrice}
                </Text>
              </View>
            )}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.backGround,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  orderItem: {
    color: myColors.primary,
    marginBottom: 20,
    borderRadius: 10,
  },
  orderHeader: {
    backgroundColor: myColors.input,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
  },
  orderTitle: {
    color: myColors.primary,
    fontSize: 16,
  },
  orderDetails: {
    backgroundColor: myColors.primary,
    padding: 15,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  productsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  productItem: {
    marginLeft: 20,
    marginTop: 5,
    marginBottom: 5,
  },
  totalPrice: {
    marginTop: 10,
    fontSize: 16,
    alignSelf: "flex-end",
    fontWeight: "bold",
  },
});

export default OverviewScreen;
