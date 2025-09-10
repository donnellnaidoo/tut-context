import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useUser } from "../context/UserContext";

export default function Profile() {
  const { user, handleUpdate } = useUser();
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
  });

  const UpdateProfile = (updatedUser) => {
    
    handleUpdate(updatedUser)
  }

  return (
    <View
      style={{ width: "100%", justifyContent: "center", alignItems: "center" }}
    >
      <TextInput
        value={userDetails.name}
        onChangeText={(text) => setUserDetails({ ...userDetails, name: text })}
        placeholder="Enter your name"
        style={{ borderWidth: 1, width: "90%",marginVertical: 10 }}
      />
      <TextInput
        value={userDetails.email}
        onChangeText={(text) => setUserDetails({ ...userDetails, email: text })}
        placeholder="Enter your email"
        style={{ borderWidth: 1, width: "90%",marginVertical: 10 }}
      />

      <Button title="Update Details"  onPress={() => UpdateProfile(userDetails)} />


      <View style={{marginTop: 40}}>
      <Text style={{ fontSize: 20 }}>Hi {user.name}</Text>
      <Text style={{ fontSize: 20 }}>Email :{user.email}</Text>

      </View>
    </View>
  );
}
