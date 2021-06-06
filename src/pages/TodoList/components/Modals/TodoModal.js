import React from "react";
import { Button, Icon, H2 } from "native-base";
import { Modal, View } from "react-native";
import { ModalContainer, ModalView } from "../styles";

export const TodoModal = (props) => {
  const closeModal = props.close;
  const visible = props.visible;

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
            <H2>{props.title}</H2>
            <Button
              onPress={closeModal}
              transparent
              style={{ position: "absolute", right: 0 }}
            >
              <Icon name="close" style={{ fontSize: 32 }} />
            </Button>
          </View>
          {props.children}
        </ModalView>
      </ModalContainer>
    </Modal>
  );
};
