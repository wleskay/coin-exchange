import CoinList from './components/CoinList/CoinList';
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader';
import AccountBalance from './components/AccountBalance/AccountBalance';
import React, {useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Div = styled.div`
  text-align: center;
  background-color: rgb(42, 76, 109);
  color: #cccccc;
`;

const COIN_COUNT = 5;
function App(props){
  const [balance, setBalance] = React.useState(10000);
  const [showBalance, setShowBalance] = React.useState(true);
  const [coinData, setCoinData] = React.useState([]);

  const componentDidMount = async () =>{
    const response = await axios.get('https://api.coinpaprika.com/v1/coins')
    const coinIds = response.data.slice(0,COIN_COUNT).map( coin => coin.id);
    const tickerUrl = 'https://api.coinpaprika.com/v1/tickers/';
    const promises = coinIds.map(id => axios.get(tickerUrl + id));
    const coinData = await Promise.all(promises);
    const coinPriceData = coinData.map(function(response){
      const coin = response.data;
      return{
        key: coin.id,
        name: coin.name,
        ticker: coin.symbol,
        balance: 0,
        price: parseFloat(coin.quotes.USD.price.toFixed(4))
      };
    });

    //retreive prices
    setCoinData(coinPriceData);
  }


  useEffect(function() {
    if (coinData.length === 0 ){
      componentDidMount();
    }
    else{
      //componenet did update 
    }
  });


  const handleRefresh = async () => {
    const response = await axios.get('https://api.coinpaprika.com/v1/coins')
    const coinIds = response.data.slice(0,COIN_COUNT).map( coin => coin.id);
    const tickerUrl = 'https://api.coinpaprika.com/v1/tickers/';
    const promises = coinIds.map(id => axios.get(tickerUrl + id));
    const newcoinData = await Promise.all(promises);
    let i = 0;
    //console.log(newcoinData)
    const updateCoinData = newcoinData.map(function(response){
      const coin = response.data;
      const index = i;
      i++;
      return{
        key: coin.id,
        name: coin.name,
        ticker: coin.symbol,
        balance: coinData[index].balance,
        price: parseFloat(coin.quotes.USD.price.toFixed(4))
      };
    });

    //retreive prices
    setCoinData(updateCoinData);


    /*const coin = await axios.get('https://api.coinpaprika.com/v1/tickers/' + valueChangeKey);
    const newCoinData= coinData.map(function(values){
      let newValues = {...values};
      if ( valueChangeKey === values.key) {
        newValues.price = parseFloat(coin.data.quotes.USD.price.toFixed(4));
        console.log(newValues.price);
      }
      return newValues;
    

    });
    setCoinData(newCoinData);*/
  };

  const handleShowBalance = (newBalanceVisibility) => {
    setShowBalance(newBalanceVisibility);
  };

  const handleIncreaseBalance = () => {
    const newBalance = balance + 1200
    setBalance(newBalance);
  };

  const handleCoinBalance = async (valueChangeKey,buyOrSell) => {
    
    let newBalance = balance;
    const newCoinData= coinData.map(function(values){
      let newValues = {...values};
      if ( valueChangeKey === values.key) {
        if(buyOrSell){
        newValues.balance = newValues.balance + 1000;
        newBalance = newBalance - 1000;
        console.log(newValues.price);
        console.log(newValues.balance);
        }
        else{
        newValues.balance = newValues.balance - 1000;
        newBalance = newBalance + 1000;
        console.log(newValues.price);
        console.log(newValues.balance);
        }
        }
      return newValues;
    });
    setCoinData(newCoinData);
    setBalance(newBalance);
  };

  return (
  <Div className="App">
    <ExchangeHeader/>
    <AccountBalance amount = {balance} 
    showBalance={showBalance} 
    handleShowBalance={handleShowBalance} 
    handleIncreaseBalance={handleIncreaseBalance}/>
    <CoinList 
    coinData = {coinData} 
    showBalance = {showBalance}
    handleRefresh={handleRefresh}
    handleCoinBalance={handleCoinBalance}/>
  </Div>
  );
};

export default App;
