import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import BasicComponent from "./src/screens/BasicComponent";
import HomeWork from "./src/screens/HomeWork";
import ListComponent from "./src/screens/ListComponent";
import SectionListComponent from "./src/screens/SectionListComponent";
import VirtualizedListComponent from "./src/screens/VirtualizedListComponent";
export default function App() {
  return (
    <SafeAreaView style={styles.containerMain}>
      {/* <View style={styles.viewContainer}>
        <BasicComponent title={"title"}></BasicComponent>
      </View> */}
      <HomeWork></HomeWork>
      {/* <VirtualizedListComponent></VirtualizedListComponent> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  containerMain: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  viewContainer: {
    flex: 0.5,
  },
  test: {
    backgroundColor: "red",
  },
  test1: {
    backgroundColor: "blue",
  },
  box: {
    width: 100,
    height: 100,
  },
  row: {
    flexDirection: "row",
  },
});
