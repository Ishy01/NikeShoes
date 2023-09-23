import { StatusBar } from "expo-status-bar";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Navigation from "./components/Navigation";

const android = Platform.OS == 'android';
const paddingTop = android ? 'pt-10' : 'pt-0';

export default function App() {
  return (
    <SafeAreaView className={"flex-1 bg-white " + paddingTop}>
      <Navigation />
    </SafeAreaView>
  );
}
