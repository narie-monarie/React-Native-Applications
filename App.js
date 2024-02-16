import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/pages/login/login";
import SignUp from "./src/pages/signup/signup";
import Cat from "./src/pages/cat-profile/cat";

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ title: "" }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ title: "" }} />
      <Stack.Screen name="Cat" component={Cat} options={{ title: "" }} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#8066DD",
    padding: 10,
  },
});
