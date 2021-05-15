import React from "react";
import { Body, Left, ListItem, Text, Thumbnail } from "native-base";

const Row = React.memo(({ coin }) => (
  <ListItem thumbnail>
    <Left>
      <Thumbnail source={{ uri: coin.image }} />
    </Left>
    <Body>
      <Text style={{ fontWeight: "bold", marginBottom: 10, fontSize: 18 }}>
        {coin.name}
      </Text>
      <Text>{coin.current_price + "$"}</Text>
    </Body>
  </ListItem>
));

export const renderListRow = ({ item }) => {
  return <Row coin={item} />;
};
