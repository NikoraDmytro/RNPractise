import React, { useState } from "react";
import { Button, Input, Item, Text } from "native-base";
import { TodoModal } from "./TodoModal.js";

export const EditTodoModal = (props) => {
  const editTodo = props.edit;
  const id = props.todo.id;
  const [todo, setTodo] = useState(props.todo.name);
  const title = "Edit Todo";

  return (
    <TodoModal title={title} {...props}>
      <Item regular style={{ marginBottom: 15, width: 85 + "%" }}>
        <Input
          placeholder="Go jogging"
          value={todo}
          onChangeText={(todo) => setTodo(todo)}
        />
      </Item>

      <Button onPress={() => editTodo(todo, id)} rounded>
        <Text>Done</Text>
      </Button>
    </TodoModal>
  );
};
