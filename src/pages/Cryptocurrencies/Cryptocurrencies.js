import { observer } from "mobx-react";
import { Container, List, Spinner } from "native-base";
import { DefaultHeader } from "../../components/DefaultHeader.js";
import React from "react";
import { CryptocurrenciesStore } from "../../store/CryptocurrenciesStore";
import { renderListRow } from "./components/renderListRow";
import { DefaultLoading } from "../../components/DefaultLoading.js";

export const Cryptocurrencies = observer(() => {
  const Store = CryptocurrenciesStore;
  const CoinsList = Store.CoinsList;

  if (!CoinsList.length) {
    Store.loadMoreCoins();
    return <DefaultLoading title="Cryptocurrencies" />;
  }

  return (
    <Container>
      <DefaultHeader title="Cryptocurrencies" />
      <List
        dataArray={CoinsList}
        keyExtractor={(item) => item.id}
        renderItem={renderListRow}
        ListFooterComponent={Store.allCoinsLoaded ? null : <Spinner />}
        onEndReachedThreshold="0.1"
        onEndReached={() => Store.loadMoreCoins()}
      />
    </Container>
  );
});
