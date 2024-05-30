import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Col, Row } from "react-native-easy-grid";
import { ScrollView } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";

const OrderDetail = () => {
  const order = useSelector((state) => state.order.products);

  const rows = order.map((product) => {
    if (!product.quantity || product.quantity === 0) {
      return null;
    }
    return (
      <Row key={product.name}>
        <Col size={10}>
          <Text>{product.name}</Text>
        </Col>
        <Col size={3}>
          <Text>{product.price}</Text>
        </Col>
        <Col size={1}>
          <Text>X</Text>
        </Col>
        <Col size={3}>
          <Text>{product.quantity}</Text>
        </Col>
        <Col size={3}>
          <Text>=</Text>
        </Col>
        <Col size={5}>
          <Text>{product.price * product.quantity}</Text>
        </Col>
      </Row>
    );
  });

  return <ScrollView>{rows}</ScrollView>;
};

export default OrderDetail;

const styles = StyleSheet.create({});
