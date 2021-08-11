import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Login, Home, EnterpriseDetails } from "../Screens";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="EnterpriseDetails" component={EnterpriseDetails} />
    </Stack.Navigator>
  );
}
