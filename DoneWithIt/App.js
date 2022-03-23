import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  View,
  Button,
  ImageBackground,
  Text,
  Image,
} from "react-native";

export default function App() {
  // console.log("App Executed");

  // const handlePress = () => {
  //   console.log("Text pressed");
  // };

  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      backgroundColor: "black",
      flexDirection: "column",
      display: "flex",
    },
    image: {
      resizeMode: "contain",
      width: "100%",
      height: "100%",
      flex: 1,
    },
    close: {
      backgroundColor: "#fc5c65",
      width: 50,
      height: 50,
      flex: 0,
      top: 30,
      left: 20,
      position: "absolute",
    },
    delete: {
      backgroundColor: "#4ECDC4",
      width: 50,
      height: 50,
      right: 20,
      top: 30,
      position: "absolute",
      zIndex: 1,
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.close} />
      <View style={styles.delete} />

      <Image source={require("./assets/furniture.jpeg")} style={styles.image} />
    </View>
  );
}
