import axios from "axios";
import { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, TextInput, View } from "react-native";
import RenderItemScreen from "./RenderItemScreen";

const data = [
  { name: "park", id: "park", password: "1234", show: false },
  { name: "kim", id: "kim", password: "1234", show: false },
  { name: "lee", id: "lee", password: "1234", show: false },
  { name: "choi", id: "choi", password: "1234", show: false },
  { name: "lim", id: "lim", password: "1234", show: false },
];

const HomeWork = () => {
  const getUser = async () => {
    const userList = await axios({
      url: "http://192.168.0.82:8000/user/",
      method: "get",
    });
    console.log(userList.data);
    setList(userList.data);
  };
  useEffect(() => {
    getUser();
  }, []);
  const [list, setList] = useState(data);
  const [input, setInput] = useState({
    name: "",
    id: "",
    password: "",
  });
  const pushList = () => {
    setList([...list, { ...input }]);
    setInput({
      name: "",
      id: "",
      password: "",
    });
  };

  const onChangeHandler = (name, value) => {
    setInput({
      ...input,
      [name]: value,
    });
  };
  return (
    <View style={styles.template}>
      <View style={styles.row}>
        <TextInput
          placeholder="id"
          onChangeText={(value) => onChangeHandler("id", value)}
          value={input.id}
          style={styles.inputBox}
        ></TextInput>
        <TextInput
          placeholder="name"
          onChangeText={(value) => onChangeHandler("name", value)}
          value={input.name}
          style={styles.inputBox}
        ></TextInput>
        <TextInput
          placeholder="password"
          onChangeText={(value) => onChangeHandler("password", value)}
          value={input.password}
          style={styles.inputBox}
        ></TextInput>
      </View>
      <Button title="push" onPress={pushList}></Button>
      <FlatList
        data={list}
        renderItem={(item, index) => (
          <RenderItemScreen item={item} index={index} />
        )}
      />
    </View>
  );
};

export default HomeWork;

const styles = StyleSheet.create({
  template: {
    margin: 10,
  },
  row: {
    flexDirection: "row",
  },
  inputBox: {
    flex: 0.333,
    borderColor: "blue",
    borderWidth: 1,
    padding: 10,
    margin: 2,
  },
});
