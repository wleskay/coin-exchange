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

const COIN_COUNT = 10;
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


  const handleRefresh = async (valueChangeKey) => {
    const coin = await axios.get('https://api.coinpaprika.com/v1/tickers/' + valueChangeKey);
    const newCoinData= coinData.map(function(values){
      let newValues = {...values};
      if ( valueChangeKey === values.key) {
        newValues.price = parseFloat(coin.data.quotes.USD.price.toFixed(4));
        console.log(newValues.price);
      }
      return newValues;
    

    });
    setCoinData(newCoinData);
  };

  const handleShowBalance = (newBalanceVisibility) => {
    setShowBalance(newBalanceVisibility);
  };
  return (
  <Div className="App">
    <ExchangeHeader/>
    <AccountBalance amount = {balance} showBalance={showBalance} handleShowBalance={handleShowBalance} />
    <CoinList 
    coinData = {coinData} 
    showBalance = {showBalance}
    handleRefresh={handleRefresh}/>
  </Div>
  );
};

export default App;
