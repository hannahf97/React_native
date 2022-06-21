import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const addList = (item) => {
  item.show = ture;
};
const ListComponent = () => {
  const data = [
    { name: "park", id: "park", password: "1234", show: false },
    { name: "kim", id: "kim", password: "1234", show: false },
    { name: "lee", id: "lee", password: "1234", show: false },
    { name: "choi", id: "choi", password: "1234", show: false },
    { name: "lim", id: "lim", password: "1234", show: false },
  ];

  return (
    <FlatList
      data={data}
      renderItem={(item, index) => renderItem(item, index)}
    ></FlatList>
  );
};

const setShow = (index) => {
  console.log(index);
};
export default ListComponent;
const renderItem = ({ item, index }) => {
  const [show, setShow] = useState(false);
  return (
    <View style={styles.itemSet}>
      <TouchableOpacity onPress={() => setShow(`${index}`)}>
        <Text>{`${index} item.name : ${item.name}`}</Text>
      </TouchableOpacity>
      {item.show ? (
        <View>
          <Text>{`item.name : ${item.id}`}</Text>
          <Text>{`item.name : ${item.password}`}</Text>
        </View>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  itemSet: {
    padding: 10,
  },
});
