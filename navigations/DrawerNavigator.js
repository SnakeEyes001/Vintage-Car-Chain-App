import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { COLORS, ROUTES } from "../constants";
import { History, Offers, Requests, Wallet} from "../screens";
import BottomTabNavigator from "./BottomTabNavigator";
//import Icon from "@expo/vector-icons/Ionicons";
import CustomDrawer from "../components/CustomDrawer";
import Icon from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: COLORS.gruna,
        drawerActiveTintColor: COLORS.orange,
        drawerLabelStyle: {
          marginLeft: -20,
          color:COLORS.orange,
        },
      }}
    >
      <Drawer.Screen
        name={ROUTES.HOME_DRAWER}
        component={BottomTabNavigator}
        options={{
          title: "Home",
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons name="garage-variant" color={color} size={size} />
          ),
        }}
      />

      <Drawer.Screen
        name={ROUTES.OFFERS_DRAWER}
        component={Offers}
        options={{
          title: "Offers",
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons name="car-multiple" color={color} size={size} />
          ),
        }}
      />

      <Drawer.Screen
        name={ROUTES.REQUESTS_DRAWER}
        component={Requests}
        options={{
          title: "Requests",
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons name="account-switch-outline" color={color} size={size} />
          ),
        }}
      />

      
      <Drawer.Screen
        name={ROUTES.HISTORY_DRAWER}
        component={History}
        options={{
          title: "History",
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons name="history" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
