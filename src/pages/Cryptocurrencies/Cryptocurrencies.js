import { observer } from "mobx-react";
import { Container, Header, List, Spinner } from "native-base";
import React from "react";
import { CryptocurrenciesStore } from "../../store/CryptocurrenciesStore";
import { renderListRow } from "./components/renderListRow";

export const Cryptocurrencies = observer(() => {
  const Store = CryptocurrenciesStore;
  const CoinsList = Store.CoinsList;

  if (!CoinsList.length) {
    Store.loadMoreCoins();
  }

  return (
    <Container>
      <Header />
      {CoinsList.length ? (
        <List
          dataArray={CoinsList}
          keyExtractor={(item) => item.id}
          renderItem={renderListRow}
          ListFooterComponent={Store.allCoinsLoaded ? null : <Spinner />}
          onEndReachedThreshold="0.1"
          onEndReached={() => Store.loadMoreCoins()}
        />
      ) : (
        <Spinner />
      )}
    </Container>
  );
});
