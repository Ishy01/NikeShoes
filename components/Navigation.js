import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import HomePage from "../screens/HomePage";
import BookmarkPage from "../screens/BookmarkPage";
import NotificationsPage from "../screens/NotificationsPage";
import ProfilePage from "../screens/ProfilePage";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "grey",
          tabBarLabelStyle: { fontSize: 15 },
          tabBarStyle: { height: 55 },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name="home"
                size={27}
                color={focused ? "black" : "grey"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Bookmark"
          component={BookmarkPage}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name="bookmark"
                size={27}
                color={focused ? "black" : "grey"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Notification"
          component={NotificationsPage}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name="bell"
                size={27}
                color={focused ? "black" : "grey"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfilePage}
          options={{
            tabBarIcon: ({ focused }) => (
              <AntDesign
                name="user"
                size={27}
                color={focused ? "black" : "grey"}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
