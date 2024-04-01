import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
//import Home from "../screens/home/Home";
import { ForgotPassword, Login, Register, UserType } from "../screens";
import DrawerNavigator from "./DrawerNavigator";
import { ROUTES, COLORS } from "../constants";

const Stack = createStackNavigator();
// Navigator, Screen, Group

function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{}} initialRouteName={ROUTES.LOGIN}>
      <Stack.Screen
        name={ROUTES.FORGOT_PASSWORD}
        component={ForgotPassword}
        options={({ route }) => ({
          headerTintColor: COLORS.white,
          // headerBackTitle: 'Back',
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          title: "Forgot password",
        })}
      />
      <Stack.Screen
        name={ROUTES.USER_TYPE}
        component={UserType}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.LOGIN}
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.REGISTER}
        component={Register}
        options={() => ({
          headerTintColor: COLORS.white,
          // headerBackTitle: 'Back',
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          title: "Register",
        })}
      />
      <Stack.Screen
        name={ROUTES.HOME}
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
{/* 
      <Stack.Screen
        name={ROUTES.OFFERS}
        component={DrawerNavigator}
        options={{ headerShown: true }}
      />
           <Stack.Screen
        name={ROUTES.REQUESTS}
        component={DrawerNavigator}
        options={{ headerShown: true }}
      /> */}
    </Stack.Navigator>
  );
}

export default AuthNavigator;
