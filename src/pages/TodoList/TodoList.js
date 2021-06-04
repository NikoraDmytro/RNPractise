import React, { useState } from "react";
import { DefaultHeader } from "../../components/DefaultHeader.js";
import {
  Container,
  Text,
  List,
  ListItem,
  Button,
  Footer,
  FooterTab,
} from "native-base";
import { TodoStore } from "../../store/TodoStore.js";
import { observer } from "mobx-react";
import { AddTodoModal } from "./components/AddTodoModal.js";

export const TodoList = observer(() => {
  const Store = TodoStore;
  const TodoList = Store.TodoList;
  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = ({ item }) => (
    <ListItem>
      <Text>{item.name}</Text>
    </ListItem>
  );

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  const addTodo = (todo) => {
    Store.addNewTodo(todo);
    setModalVisible(false);
  };

  return (
    <Container>
      <DefaultHeader title="TODO list" />
      <AddTodoModal visible={modalVisible} close={closeModal} add={addTodo} />
      <List
        dataArray={TodoList}
        renderItem={renderItem}
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
