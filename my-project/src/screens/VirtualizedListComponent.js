import {
  SafeAreaView,
  StyleSheet,
  View,
  VirtualizedList,
  Text,
} from "react-native";

const DATA = new Array(100).fill(1).map((data, i) => i);
const getItemCount = (data) => 100;
const getItem = (data, index) => ({
  id: index,
  title: `title ${index}`,
});
const VirtualizedListComponent = () => {
  return (
    <SafeAreaView>
      <VirtualizedList
        data={DATA}
        initialNumToRender={5}
        renderItem={({ item }) => (
          <View style={styles.section}>
            <Text>{item.title}</Text>
          </View>
        )}
        getItemCount={getItemCount}
        getItem={getItem}
      ></VirtualizedList>
    </SafeAreaView>
  );
};

export default VirtualizedListComponent;

const styles = StyleSheet.create({
  section: {
    padding: 30,
  },
});
