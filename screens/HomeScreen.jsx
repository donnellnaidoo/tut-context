import React from "react";
import { View, Text } from "react-native";
import { useUser } from "../context/UserContext";

export default function Home() {
  const { user } = useUser();
  return (
    <View>
      <Text style={{ fontSize: 32 }}>Hi {user.name}</Text>
      <Text style={{ fontSize: 30 }}>Email :{user.email}</Text>
    </View>
  );
}
