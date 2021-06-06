import React, { useState } from "react";
import { DefaultHeader } from "../../components/DefaultHeader.js";
import { Container, Text, List, Button, Footer, FooterTab } from "native-base";
import { TodoStore } from "../../store/TodoStore.js";
import { observer } from "mobx-react";
import { AddTodoModal } from "./components/Modals/AddTodoModal.js";
import { Todo } from "./components/Todo/Todo.js";

export const TodoList = observer(() => {
  const Store = TodoStore;
  const TodoList = Store.TodoList;
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  const addTodo = (todo) => {
    Store.addNewTodo(todo);
    setModalVisible(false);
  };

  const renderTodo = ({ item }) => <Todo item={item} />;

  return (
    <Container>
      <DefaultHeader title="TODO list" />
      <AddTodoModal visible={modalVisible} close={closeModal} add={addTodo} />
      <List
        dataArray={TodoList}
        renderItem={renderTodo}
        keyExtractor={(item) => item.id}
      />
      <Footer>
        <FooterTab>
          <Button onPress={openModal} active full>
            <Text>Add todo</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
});
