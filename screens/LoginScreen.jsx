import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useUser } from "../context/UserContext";

export default function LoginScreen() {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
  });
  const { user, handleLogin} = useUser();

  return (
    <View>
      <Text>Name: {user.name}</Text>
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
