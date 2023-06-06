import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "./constants/styles";

import HomeScreen from "./screens/HomeScreen";
import WritingScreen from "./screens/WritingScreen";
import MyStoriesScreen from "./screens/MyStoriesScreen";
import MyStoryScreen from "./screens/MyStoryScreen";
import HttpsScreen from "./screens/HttpsScreen";
import StoriesContextProvider from "./store/stories-context";
import IconButton from "./UI/IconButton";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

function TopTabNavigator() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen />
    </TopTab.Navigator>
  );
}

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary700 },
        contentStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: GlobalStyles.colors.accent500,
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary700,
          height: 60,
          paddingBottom: 5,
        },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
      }}
    >
      <BottomTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Your Stories"
        component={MyStoriesScreen}
        options={({ navigation }) => ({
          /**
           * Note that this navigation works, b/c we wrapped the whole screenOptions as a function,
           * which enables us to use navigation (it is automatically given as a prop)
           */
          headerRight: () => (
            <IconButton
              icon="add"
              size={24}
              color={GlobalStyles.colors.accent500}
              onPress={() => {
                navigation.navigate("WritingScreen");
              }}
            />
          ),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="library-outline" color={color} size={size} />
          ),
        })}
      />
    </BottomTab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="dark-content" />
      <StoriesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: GlobalStyles.colors.primary700 },
              contentStyle: { backgroundColor: GlobalStyles.colors.primary500 },
              headerTitleStyle: { color: GlobalStyles.colors.accent500 },
              headerTintColor: GlobalStyles.colors.accent500,
              headerShown: false,
            }}
          >
            <Stack.Screen name="Default" component={BottomTabNavigator} />
            <Stack.Screen
              name="MyStoryScreen"
              component={MyStoryScreen}
              options={{
                headerShown: true,
                title: "My Story",
              }}
            />
            <Stack.Screen
              name="WritingScreen"
              component={WritingScreen}
              options={{ tabBarHideOnKeyboard: true }}
            />
            <Stack.Screen
              name="HttpsScreen"
              component={HttpsScreen}
              options={{ presentation: "modal" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </StoriesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
