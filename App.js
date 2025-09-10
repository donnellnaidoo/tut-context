import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AuthStack from "./navigation/AuthStack";
import MainTab from "./navigation/MainTab";
import { NavigationContainer } from "@react-navigation/native";
import { UserProvider, useUser } from "./context/UserContext";
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <NavigationContainer>
      <UserProvider>
        <CartProvider>
          <RootNavigator />
        </CartProvider>
      </UserProvider>
    </NavigationContainer>
  );
}

const RootNavigator = () => {
  const { user } = useUser();

  return user.name ? <MainTab /> : <AuthStack />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
