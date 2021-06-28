import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Cryptocurrencies } from "./pages/Cryptocurrencies/Cryptocurrencies.js";
import { TodoList } from "./pages/TodoList/TodoList.js";
import { Comic } from "./pages/Comic/Comic.js";
import { Weather } from "./pages/Weather/Weather.js";
import RNBootSplash from "react-native-bootsplash";

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      <Drawer.Navigator>
        <Drawer.Screen name="Cryptocurrencies" component={Cryptocurrencies} />
        <Drawer.Screen name="TodoList" component={TodoList} />
        <Drawer.Screen name="Comic" component={Comic} />
        <Drawer.Screen name="Weather" component={Weather} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
