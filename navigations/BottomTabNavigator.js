import "react-native-gesture-handler";
import React from "react";
import {
  BottomTabBarHeightCallbackContext,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { StyleSheet, Platform, TouchableOpacity } from "react-native";
import { COLORS, ROUTES } from "../constants";
import { Home,Offers,Requests, History } from "../screens";
import Icon from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
/* import SettingsNavigator from "./SettingsNavigator";
import CustomTabBarButton from "../components/CustomTabBarButton";
import CustomTabBar from "../components/CustomTabBar"; */
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  const navigation = useNavigation();

  return (
/*     <Tab.Navigator
      initialRouteName={ROUTES.HOME}
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    > */
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarInactiveTintColor: COLORS.dark,
        //tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: COLORS.gruna,
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;

          if (route.name === ROUTES.HOME_TAB) {
            iconName = focused ? "ios-home-sharp" : "ios-home-outline";
          } else if (route.name === ROUTES.OFFERS_TAB) {
            iconName = focused ? "settings" : "settings-outline";
          } else if (route.name === ROUTES.REQUESTS_TAB) {
            iconName = focused ? "wallet" : "wallet-outline";
          } else if (route.name === ROUTES.HISTORY_TAB) {
            iconName = focused ? "wallet" : "wallet-outline";
          }

          return <Icon name={iconName} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name={ROUTES.HOME_TAB}
        component={Home}
        options={{
          tabBarLabel: 'Garage',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="garage-variant" color={color} size={size} />
            
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.OFFERS_TAB}
        component={Offers}
        options={{
          tabBarLabel: 'Offers',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="car-multiple" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
       name={ROUTES.REQUESTS_TAB}
       component={Requests}
        options={{
          tabBarLabel: 'Requests',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-switch-outline" color={color} size={size} />
          ),
        }}
      />

<Tab.Screen
       name={ROUTES.HISTORY_TAB}
       component={History}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="history" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    backgroundColor: COLORS.transparent,
    borderTopWidth: 0,
    bottom: 15,
    right: 10,
    left: 10,
    height: 58,
  },
});
