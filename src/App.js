import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Cryptocurrencies } from "./pages/Cryptocurrencies/Cryptocurrencies.js";
import { TodoList } from "./pages/TodoList/TodoList.js";
import { Comic } from "./pages/Comic/Comic.js";

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Cryptocurrencies" component={Cryptocurrencies} />
        <Drawer.Screen name="TodoList" component={TodoList} />
        <Drawer.Screen name="Comic" component={Comic} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
