const { makeAutoObservable, flow } = require("mobx");

const NamesURI = "https://api.coingecko.com/api/v3/coins/list";
const CoinURI = "https://api.coingecko.com/api/v3/coins/";
const LoadPerFetch = 10;

class CryptocurrenciesStore {
  constructor() {
    this.Names = [];
    this.CoinsList = [];
    this.LoadNames = this.LoadNames.bind(this);
    this.LoadMore = this.LoadMore.bind(this);
    this.LoadingMore = false;
    this.AllLoaded = false;
    this.Index = 0;
    makeAutoObservable(this);
  }

  LoadNames = flow(function* () {
    try {
      const response = yield fetch(NamesURI);
      const Names = yield response.json();

      this.Names = Names;
    } catch (err) {
      console.log(err);
    }
  });

  LoadMore = flow(function* () {
    if (this.LoadingMore || this.AllLoaded) return;
    this.LoadingMore = true;

    const NewData = [];

    for (let i = this.Index; i < this.Index + LoadPerFetch; i++) {
      if (i == this.Names.length) {
        this.AllLoaded = true;
        break;
      }
      try {
        const response = yield fetch(CoinURI + this.Names[i].id);
        const Coin = yield response.json();
        NewData.push(Coin);
      } catch (err) {
        NewData.push({ id: this.Names[i].id, name: "ERROR" });
        console.log(err);
      }
    }
    this.CoinsList = [...this.CoinsList, ...NewData];
    this.LoadingMore = false;
    this.Index = this.Index + LoadPerFetch;
  });
}

export const Cryptocurrencies = new CryptocurrenciesStore();
