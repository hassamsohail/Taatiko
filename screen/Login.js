import React from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Image,
  Pressable,
} from "react-native";
import  LinearGradient from "react-native-linear-gradient";
// import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native"; // Import the useNavigation hook

export default function Login() {
  const navigation = useNavigation(); // Get navigation object


  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      {/* <StatusBar style="dark" /> */}
      <LinearGradient
        colors={["#3D45D4", "#A65EEF"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        style={styles.linearGradient}
      >
        <View style={styles.contentContainer}>
          <Text
            style={{
              fontSize: 40,
              color: "#fff",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Sign In
          </Text>
          <View
            style={{
              height: 15,
            }}
          />
          <Pressable
            style={{
              width: "100%",
            }}
            onPress={() => {
              navigation.navigate("Mainscreen");
            }}
          >
            <Image
              source={require("../assets/Fb.png")}
              style={{
                width: "100%",
                alignSelf: "center",
                height: 55,
              }}
              resizeMode="contain"
            ></Image>
          </Pressable>

          <View
            style={{
              height: 15,
            }}
          />

          <Text
            style={{
              fontSize: 20,
              color: "#fff",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            OR
          </Text>
          <View
            style={{
              height: 15,
            }}
          />
          <Pressable
            style={{
              width: "100%",
            }}
            onPress={() => {
              navigation.navigate("Mainscreen");
            }}
          >
            <Image
              source={require("../assets/Go.png")}
              style={{
                width: "100%",
                alignSelf: "center",
                height: 61,
              }}
              resizeMode="contain"
              // Add onPress to navigate when the image is pressed
            ></Image>
          </Pressable>
        </View>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // position: "relative",
  },
  contentContainer: {
    alignItems: "center",
    width: "90%",
    height: 300,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(225, 225, 225, 0.21)",
    justifyContent: "center",
    alignItems: "center",
  },
});
