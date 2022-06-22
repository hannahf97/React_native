import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, loginCheck } from "../../store/users";
import PostUpdateScreen from "../PostUpdateScreen";
import BottomTabScreen from "./BottomTabScreen";
import LoginNavigate from "./LoginNavigete";

const IndexNavigate = () => {
  const isLogin = useSelector((state) => state.users.isLogin);
  const dispatch = useDispatch();
  const reLogin = async () => {
    const user = await AsyncStorage.getItem("user");
    dispatch(login(JSON.parse(user)));
  };
  useEffect(() => {
    reLogin();
  }, []);
  const Stack = createStackNavigator();
  return isLogin ? ( //
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={BottomTabScreen} //
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="PostAdd"
          component={PostUpdateScreen}
          options={{
            headerTitle: "글 쓰기",
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <LoginNavigate></LoginNavigate>
  );
};
export default IndexNavigate;
