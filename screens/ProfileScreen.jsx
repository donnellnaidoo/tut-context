import React from "react";
import { View, Text } from "react-native";
import { useUser } from "../context/UserContext";

export default function Profile() {
    const { user } = useUser()
    return (
        <View>
            <Text>Profile</Text>
        </View>
    )
}
