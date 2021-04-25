const { makeAutoObservable, flow } = require("mobx");

const LoadPerFetch = 10;

class CryptocurrenciesStore {
  constructor() {
    this.Names = [];
    this.CoinsList = [];
    this.LoadMore = this.LoadMore.bind(this);
    this.LoadingMore = false;
    this.AllLoaded = false;
    this.Page = 1;
    makeAutoObservable(this);
  }

  LoadMore = flow(function* () {
    if (this.LoadingMore || this.AllLoaded) return;
    this.LoadingMore = true;

    /*if (i == this.Names.length) {
      this.AllLoaded = true;
      return;
    }*/
    try {
      const response = yield fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${LoadPerFetch}&page=${this.Page}&sparkline=false`
      );
      const Coins = yield response.json();

      if (!Coins.length) {
        this.AllLoaded = true;
        return;
      }

      this.CoinsList = [...this.CoinsList, ...Coins];
      this.LoadingMore = false;
      this.Page = this.Page + 1;
    } catch (err) {
      console.log(err);
    }
  });
}

export const Cryptocurrencies = new CryptocurrenciesStore();
