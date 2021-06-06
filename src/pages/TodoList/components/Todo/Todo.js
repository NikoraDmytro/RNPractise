import React, { useRef, useState } from "react";
import { ListItem, Text } from "native-base";
import { TodoStore } from "../../../../store/TodoStore.js";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { EditTodoModal } from "../Modals/EditTodoModal.js";
import { LeftAction, RightAction } from "./HiddenStuff.js";

export const Todo = ({ item }) => {
  const swipeable = useRef();
  const Store = TodoStore;
  const [Visible, setVisible] = useState(false);

  const openModal = () => {
    swipeable.current.close();
    setVisible(true);
  };
  const closeModal = () => setVisible(false);
  const editTodo = (todo, id) => {
    Store.editTodo(todo, id);
    setVisible(false);
  };

  return (
    <Swipeable
      renderLeftActions={LeftAction}
      renderRightActions={RightAction}
      onSwipeableRightOpen={() => Store.deleteTodo(item.id)}
      onSwipeableLeftOpen={openModal}
      ref={swipeable}
      leftThreshold="100"
      rightThreshold="100"
    >
      <EditTodoModal
        visible={Visible}
        close={closeModal}
        edit={editTodo}
        todo={item}
      />
      <ListItem style={{ backgroundColor: "white" }}>
        <Text>{item.name}</Text>
      </ListItem>
    </Swipeable>
  );
};
