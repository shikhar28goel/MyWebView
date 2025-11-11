import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from "react-native";

export default function Splash({ navigation }) {
  const [url, setUrl] = useState("");
  const [isFocused, setIsFocused] = useState(false); // track focus state

  const openWebView = () => {
    if (url.trim() !== "") {
      const fullUrl = url.startsWith("http") ? url : `https://${url}`;
      navigation.navigate("WebView", { url: fullUrl });
    } else {
      alert("Please enter a valid URL");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Web Application</Text>

      <TextInput
        style={[
          styles.input,
          { borderColor: isFocused ? "#398FFF" : "#aaa" }, // dynamic border color
        ]}
        placeholder="Enter website URL"
        value={url}
        onChangeText={setUrl}
        autoCapitalize="none"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      <TouchableOpacity style={styles.button} onPress={openWebView}>
        <Text style={styles.buttonText}>Open</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    alignSelf: "center",
    marginVertical: 20,
    fontWeight: "500",
    fontSize: 25,
    color: "black",
  },
  input: {
    borderWidth: 2,
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    justifyContent: "center",
    backgroundColor: "#398FFF",
    height: 40,
    borderRadius: 8,
    elevation: 2,
  },
  buttonText: {
    alignSelf: "center",
    color: "#fff",
    fontWeight: "500",
    fontSize: 16,
  },
});
