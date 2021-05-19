import React from "react";
import { Body, Button, Header, Icon, Left, Title } from "native-base";
import { useNavigation } from "@react-navigation/native";

export const DefaultHeader = ({ title }) => {
  const navigation = useNavigation();

  return (
    <Header>
      <Left>
        <Button onPress={() => navigation.openDrawer()} transparent>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>{title}</Title>
      </Body>
    </Header>
  );
};
