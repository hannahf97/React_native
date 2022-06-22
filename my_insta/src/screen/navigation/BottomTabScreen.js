import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { setStatusBarBackgroundColor } from "expo-status-bar";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import IconIcon from "react-native-vector-icons/Ionicons";
import HomeScreen from "../screen/HomeScreen";
import SettingsScreen from "../screen/SettingsScreen";
import ProfileScreen from "../screen/ProfileScreen";

const Tab = createMaterialBottomTabNavigator();

function BottomTabScreen() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: "white",
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Select"
          component={SettingsScreen}
          options={{
            tabBarLabel: "Select",
            tabBarIcon: ({ color, size }) => (
              <IconIcon name="search" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="person"
          component={ProfileScreen}
          options={{
            tabBarLabel: "person",
            tabBarIcon: ({ color, size }) => (
              <IconIcon name="person" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomTabScreen;
