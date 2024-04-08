import React from "react";
import { View, ActivityIndicator, Text, StyleSheet } from "react-native";

const Loader = ({ text }) => {
  return (
    <View style={styles.overlay}>
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Loader;
