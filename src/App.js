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
  constructor(props){
    super(props);
    this.state = {
      balance: 10000,
      coinData: [
        {
          name:"Bitcoin",
          ticker:"BTC",
          price: 9999.99
        },
        {
          name:"Ethereum",
          ticker:"ETH",
          price: 299.99
        },
        {
          name:"Tether",
          ticker:"USDT",
          price: 1.00
        },
        {
          name:"Ripple",
          ticker:"XRP",
          price: .20
        },
        {
          name:"Bitcoin Cash",
          ticker:"BCH",
          price: 298.99
        }
      ]
        
      
    }
  }
  render(){
    return (
    <Div className="App">
      <ExchangeHeader/>
      <AccountBalance amount = {this.state.balance}/>
      <CoinList coinData = {this.state.coinData} />
    </Div>
    );
  }
}

export default App;
