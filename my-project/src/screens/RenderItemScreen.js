import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const RenderItemScreen = ({ item }) => {
  const { index } = item;
  const itemObj = item.item;
  const [show, setShow] = useState(false);
  return (
    <View>
      <TouchableOpacity onPress={() => setShow(!show)}>
        <Text>{`${index} item.name : ${itemObj.name}`}</Text>
      </TouchableOpacity>
      {show ? (
        <View>
          <Text>{`item.name : ${itemObj.id}`}</Text>
          <Text>{`item.name : ${itemObj.password}`}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default RenderItemScreen;

const styles = StyleSheet.create({});
