import CoinList from './components/CoinList/CoinList';
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader';
import AccountBalance from './components/AccountBalance/AccountBalance';
import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  text-align: center;
  background-color: rgb(42, 76, 109);
  color: #cccccc;
`;

class App extends React.Component{
  state = {
    showBalance: true,
    balance: 10000,
    coinData: [
      {
        name:"Bitcoin",
        ticker:"BTC",
        balance: 0,
        price: 9999.99
      },
      {
        name:"Ethereum",
        ticker:"ETH",
        balance: 0,
        price: 299.99
      },
      {
        name:"Tether",
        ticker:"USDT",
        balance: 0,
        price: 1.00
      },
      {
        name:"Ripple",
        ticker:"XRP",
        balance: 0,
        price: .20
      },
      {
        name:"Bitcoin Cash",
        ticker:"BCH",
        balance: 0,
        price: 298.99
      }
    ] 
  }

  handleRefresh = (valueChangeTicker) => {
    const newCoinData= this.state.coinData.map(function(values){
      let newValues = {...values};
      if ( valueChangeTicker === values.ticker) {
        const randomPercentage = 0.995 + Math.random() * 0.01;
        newValues.price *= randomPercentage;
      }
      return newValues;
    

    });
    this.setState({coinData: newCoinData});

  }

  handleShowBalance = (newBalanceState) => {
    /*this.setState(function(oldstate){
      return{
        ...oldstate,
        showBalance: !oldstate.showBalance
      }
    })*/
    this.setState({showBalance: newBalanceState});
  }

  render(){
    return (
    <Div className="App">
      <ExchangeHeader/>
      <AccountBalance amount = {this.state.balance} showBalance={this.state.showBalance} handleShowBalance={this.handleShowBalance} />
      <CoinList 
      coinData = {this.state.coinData} 
      showBalance = {this.state.showBalance}
      handleRefresh={this.handleRefresh}/>
    </Div>
    );
  }
}

export default App;
