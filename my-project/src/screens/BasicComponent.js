import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Dimensions,
  Button,
} from "react-native";
const BasicComponent = (props) => {
  const [name, setName] = useState("");
  return (
    <ScrollView>
      <Image
        style={styles.img}
        source={{
          uri: "https://user-images.githubusercontent.com/46432606/172374912-bf603007-2b29-420a-a031-1f55d350b4cf.jpg",
        }}
      ></Image>
      <Image
        style={styles.img}
        source={{
          uri: "https://user-images.githubusercontent.com/46432606/172375796-6622bd79-2a06-4ea3-a170-f233e5bfde70.jpeg",
        }}
      ></Image>
      <Text>Hello world</Text>
      <TextInput
        style={styles.input}
        onChangeText={(e) => setName(e)}
        value={name}
      ></TextInput>
      <Text>{name}</Text>
      <Text>{props.title}</Text>
      <Button title="버튼" onPress={() => setName("")}></Button>
    </ScrollView>
  );
};
export default BasicComponent;
const win = Dimensions.get("window");
const ratio = win.width / 200;
const styles = StyleSheet.create({
  img: {
    width: win.width,
    height: 300 * ratio,
  },
  input: {
    borderColor: "green",
    borderWidth: 1,
    width: 100,
    padding: 5,
  },
});
