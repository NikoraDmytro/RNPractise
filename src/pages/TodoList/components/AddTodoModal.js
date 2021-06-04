import React, { useState } from "react";
import { Button, Icon, Input, Item, H2, Text } from "native-base";
import { Modal, View } from "react-native";
import { ModalContainer, ModalView } from "./styles";

export const AddTodoModal = (props) => {
  const closeModal = props.close;
  const visible = props.visible;
  const addTodo = props.add;
  const [todo, setTodo] = useState("");

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <ModalContainer>
        <ModalView>
          <View
            style={{
              marginBottom: 20,
              justifyContent: "center",
            }}
          >
            <H2>Add New Todo</H2>
            <Button
              onPress={closeModal}
              transparent
              style={{ position: "absolute", right: 0 }}
            >
              <Icon name="close" style={{ fontSize: 32 }} />
            </Button>
          </View>

          <Item regular style={{ marginBottom: 15, width: 85 + "%" }}>
            <Input
              placeholder="Go jogging"
              onChangeText={(todo) => setTodo(todo)}
            />
          </Item>

          <Button onPress={() => addTodo(todo)} rounded>
            <Text>Done</Text>
          </Button>
        </ModalView>
      </ModalContainer>
    </Modal>
  );
};
