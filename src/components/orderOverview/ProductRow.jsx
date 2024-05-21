import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Col, Row } from "react-native-easy-grid";

const ProductRow = ({ product }) => {
  return (
    <Row style={styles.row}>
      <Col size={10}>
        <Text>Test</Text>
      </Col>
      <Col size={3}>{product.price}</Col>
      <Col size={1}>X</Col>
      <Col size={3}>{product.number}</Col>
      <Col size={5}>{product.price * product.total}</Col>
      <Col size={2}>+</Col>
      <Col size={2}>-</Col>
    </Row>
  );
};

export default ProductRow;

const styles = StyleSheet.create({
  row: {
    padding: 10,
  },
});
