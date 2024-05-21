import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Col, Row } from "react-native-easy-grid";
import { ScrollView } from "react-native-gesture-handler";

const OrderDetail = ({ order }) => {
  const rows = order.map((product) => {
    if (!product.number || product.number === 0) {
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
          <Text>{product.number}</Text>
        </Col>
        <Col size={3}>
          <Text>=</Text>
        </Col>
        <Col size={5}>
          <Text>{product.price * product.number}</Text>
        </Col>
        <Col size={2}>
          <Text>+</Text>
        </Col>
        <Col size={2}>
          <Text>-</Text>
        </Col>
      </Row>
    );
  });

  return <ScrollView>{rows}</ScrollView>;
};

export default OrderDetail;

const styles = StyleSheet.create({});
