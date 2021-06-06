import { Icon, Text } from "native-base";
import React from "react";
import { HiddenView } from "../styles";

export const LeftAction = () => {
  return (
    <HiddenView>
      <Icon
        name="edit"
        type="AntDesign"
        style={{ fontSize: 20, marginRight: 10 }}
      />
      <Text>Edit</Text>
    </HiddenView>
  );
};

export const RightAction = () => {
  return (
    <HiddenView
      style={{
        justifyContent: "flex-end",
        backgroundColor: "red",
      }}
    >
      <Text style={{ color: "white" }}>Delete</Text>
      <Icon
        name="trash"
        type="Entypo"
        style={{ fontSize: 20, marginLeft: 15, color: "white" }}
      />
    </HiddenView>
  );
};
