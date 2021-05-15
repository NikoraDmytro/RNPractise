const { makeAutoObservable, flow } = require("mobx");

const LOAD_PER_FETCH = 10;

class Cryptocurrencies {
  constructor() {
    this.CoinsList = [];
    this.loadMoreCoins = this.loadMoreCoins.bind(this);
    this.loadingMoreCoins = false;
    this.allCoinsLoaded = false;
    this.page = 1;
    makeAutoObservable(this);
  }

  loadMoreCoins = flow(function* () {
    if (this.loadingMoreCoins || this.allCoinsLoaded) return;
    this.loadingMoreCoins = true;
    try {
      const response = yield fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${LOAD_PER_FETCH}&page=${this.page}&sparkline=false`
      );
      const Coins = yield response.json();

      if (!Coins.length) {
        this.allCoinsLoaded = true;
        return;
      }

      this.CoinsList = [...this.CoinsList, ...Coins];
      this.loadingMoreCoins = false;
      this.page = this.page + 1;
    } catch (err) {
      console.log(err);
    }
  });
}

export const CryptocurrenciesStore = new Cryptocurrencies();
