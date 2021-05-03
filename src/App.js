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

const renderRow = ({ item }) => {
  return <Row coin={item} />;
};

const App = observer(() => {
  const CoinsList = Cryptocurrencies.CoinsList;

  if (!CoinsList.length) {
    Cryptocurrencies.loadMoreCoins();
  }

  return (
    <Container>
      <Header />
      {CoinsList.length ? (
        <List
          dataArray={CoinsList}
          keyExtractor={(item) => item.id}
          renderItem={renderRow}
          ListFooterComponent={
            Cryptocurrencies.allCoinsLoaded ? null : <Spinner />
          }
          onEndReachedThreshold="0.1"
          onEndReached={() => Cryptocurrencies.loadMoreCoins()}
        />
      ) : (
        <Spinner />
      )}
    </Container>
  );
});

export default App;
