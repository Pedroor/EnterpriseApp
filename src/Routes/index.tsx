import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import {
  Login,
  Home,
  EnterpriseDetails,
  Filter,
  FavoriteList,
} from "../Screens";

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
      <Stack.Screen name="Filter" component={Filter} />
      <Stack.Screen name="FavoriteList" component={FavoriteList} />
    </Stack.Navigator>
  );
}
