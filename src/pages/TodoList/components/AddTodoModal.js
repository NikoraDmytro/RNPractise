import React from "react";
import { Button, H1, Text } from "native-base";
import { Modal } from "react-native";
import styled from "styled-components/native";

const ModalView = styled.View`
  background-color: white;
  border: 1px solid black;
  border-radius: 30px;
  padding: 50px 100px;
  align-items: center;
`;

const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: rgba(63, 78, 117, 0.5);
`;

export const AddTodoModal = (props) => {
  const closeModal = props.close;
  const visible = props.visible;

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <ModalContainer>
        <ModalView>
          <H1>HELLO</H1>
          <Button color="red" onPress={closeModal}>
            <Text>Close Modal</Text>
          </Button>
        </ModalView>
      </ModalContainer>
    </Modal>
  );
};
