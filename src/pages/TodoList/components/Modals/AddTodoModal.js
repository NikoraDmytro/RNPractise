import React, { useState } from "react";
import { Button, Input, Item, Text } from "native-base";
import { TodoModal } from "./TodoModal.js";

export const AddTodoModal = (props) => {
  const addTodo = props.add;
  const [todo, setTodo] = useState("");
  const title = "Add New Todo";

  return (
    <TodoModal title={title} {...props}>
      <Item regular style={{ marginBottom: 15, width: 85 + "%" }}>
        <Input
          placeholder="Go jogging"
          onChangeText={(todo) => setTodo(todo)}
        />
      </Item>

      <Button onPress={() => addTodo(todo)} rounded>
        <Text>Done</Text>
      </Button>
    </TodoModal>
  );
};
