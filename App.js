import { SafeAreaView } from "react-native";
import Navigation from "./components/Navigation";

const paddingTop = Platform.OS == 'android' ? 'pt-10' : 'pt-0';

export default function App() {
  return (
    <SafeAreaView className={`flex-1 bg-white ${paddingTop}`}>
      <Navigation />
    </SafeAreaView>
  );
}
