import React from "react";
import { ListItem, Icon, Text } from "native-base";
import { TodoStore } from "../../../store/TodoStore.js";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { HiddenView } from "./styles.js";

export const renderTodo = ({ item }) => {
  const Store = TodoStore;

  const LeftAction = () => {
    return (
      <HiddenView>
        <Icon
          name="edit"
          type="AntDesign"
          style={{ fontSize: 20, marginRight: 10 }}
        />
        <Text>Edit</Text>
      </HiddenView>
    );
  };

  const RightAction = () => {
    return (
      <HiddenView
        style={{
          justifyContent: "flex-end",
          backgroundColor: "red",
        }}
      >
        <Text style={{ color: "white" }}>Delete</Text>
        <Icon
          name="trash"
          type="Entypo"
          style={{ fontSize: 20, marginLeft: 15, color: "white" }}
        />
      </HiddenView>
    );
  };

  return (
    <Swipeable
      renderLeftActions={LeftAction}
      renderRightActions={RightAction}
      leftThreshold="100"
      rightThreshold="100"
    >
      <ListItem style={{ backgroundColor: "white" }}>
        <Text>{item.name}</Text>
      </ListItem>
    </Swipeable>
  );
};
