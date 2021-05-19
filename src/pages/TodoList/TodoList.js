import React from "react";
import { DefaultHeader } from "../../components/DefaultHeader.js";
import { Container, Content, Text, Icon } from "native-base";

export const TodoList = () => {
  return (
    <Container>
      <DefaultHeader title="TODO list" />
      <Content>
        <Text>TODO Later...</Text>
      </Content>
    </Container>
  );
};
