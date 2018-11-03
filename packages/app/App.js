import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Chat from "./Chat";
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Stack App</Text>
        <Chat />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
