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
import { Colors } from "react-native/Libraries/NewAppScreen";

import colors from "../config/colors";

export default function WelcomeScreen() {
  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      width: "100%",
      height: "100%",
      backgroundColor: "white",
    },
    login: {
      flex: 1,
      alignItems: "center",
      zIndex: 1,
    },
    signup: {
      bottom: 0,
      zIndex: 1,
    },
    text: {
      textAlign: "center",
      justifyContent: "flex-start",
      width: "100%",
      color: "black",
      fontSize: 20,
      flex: 1,
      zIndex: 1,
    },
    image: {
      top: 20,
      resizeMode: "center",
      width: "35%",
      flex: 0.5,
      alignSelf: "center",
      justifyContent: "center",
      zIndex: 1,
    },
    whitebg: {
      width: "100%",
      height: "100%",
      backgroundColor: "white",
      opacity: 0.2,
      ...StyleSheet.absoluteFillObject,
      zIndex: 0,
    },
  });

  return (
    <View style={styles.container}>
      <ImageBackground
        style={{
          width: "100%",
          height: "100%",
        }}
        source={require("/home/aadivyaraushan/Documents/GitHub/react-native-course-app/DoneWithIt/assets/bg.jpg")}
      >
        <Image source={require("./assets/Google.png")} style={styles.image} />

        <Text style={styles.text}>Sell What You Don't Need</Text>
        <Button
          title="Login"
          color={colors.primary}
          onPress={() => console.log("Logging in")}
          style={styles.login}
        />
        <Button
          title="Sign Up"
          color={colors.secondary}
          onPress={() => console.log("Logging in")}
          style={styles.signup}
        />
        <View style={styles.whitebg}></View>
      </ImageBackground>
    </View>
  );
}
