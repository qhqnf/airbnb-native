import React from "react";
import { View, Text } from "react-native";

export default () => {
  const isLoggedIn = false;
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      {isLoggedIn ? <Text>Hello!</Text> : <Text>Please Login</Text>}
    </View>
  );
};
