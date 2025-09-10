import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
  });
  const navigator = useNavigation();

  return (
    <View>
      <Text>Name:</Text>
      <TextInput
        placeholder="Enter your name"
        style={{ borderWidth: 1 }}
        value={userDetails.name}
        onChangeText={(text) => setUserDetails({ ...userDetails, name: text })}
      />
      <Text>Email:</Text>
      <TextInput
        placeholder="Enter your email"
        style={{ borderWidth: 1 }}
        value={userDetails.email}
        onChangeText={(text) => setUserDetails({ ...userDetails, email: text })}
      />

      <Button title="Login" />
    </View>
  );
}
