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
import { ToDoStore } from "../../store/ToDoStore.js";
import { observer } from "mobx-react";
import { AddTodoModal } from "./components/AddTodoModal.js";

export const TodoList = observer(() => {
  const Store = ToDoStore;
  const ToDoList = Store.ToDoList;
  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = ({ item }) => (
    <ListItem>
      <Text>{item.name}</Text>
    </ListItem>
  );

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <Container>
      <DefaultHeader title="TODO list" />
      <AddTodoModal visible={modalVisible} close={closeModal} />
      <List
        dataArray={ToDoList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Footer>
        <FooterTab>
          <Button onPress={openModal} active full>
            <Text>Add TODO</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
});
