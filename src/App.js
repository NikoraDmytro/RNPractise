import { observer } from "mobx-react";
import {
  Body,
  Container,
  Header,
  Left,
  List,
  ListItem,
  Spinner,
  Text,
  Thumbnail,
} from "native-base";
import React from "react";
import { Cryptocurrencies } from "./store/CryptocurrenciesStore.js";

const Row = React.memo(({ item }) => (
  <ListItem thumbnail>
    <Left>
      <Thumbnail source={{ uri: item.image.large }} />
    </Left>
    <Body>
      <Text style={{ fontWeight: "bold", marginBottom: 10, fontSize: 18 }}>
        {item.name}
      </Text>
      <Text>{item.market_data.current_price.usd + "$"}</Text>
    </Body>
  </ListItem>
));

const RenderRow = ({ item }) => {
  return <Row item={item} />;
};

const App = observer(() => {
  const Data = Cryptocurrencies.CoinsList;

  if (!Data.length) {
    Cryptocurrencies.LoadNames();
  }
  if (!Data.length && Cryptocurrencies.Names.length) {
    Cryptocurrencies.LoadMore();
  }

  return (
    <Container>
      <Header />
      {Data.length ? (
        <List
          dataArray={Data}
          keyExtractor={(item) => item.id}
          renderItem={RenderRow}
          ListFooterComponent={Cryptocurrencies.AllLoaded ? null : <Spinner />}
          onEndReachedThreshold="0.1"
          onEndReached={() => Cryptocurrencies.LoadMore()}
        />
      ) : (
        <Spinner />
      )}
    </Container>
  );
});

export default App;
