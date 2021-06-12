import React, { Component } from 'react'
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const Table = styled.table`
    margin: 50px auto 50px auto; 
    display: inline-block;
    font-size: 1.4rem;
`;

export default class CoinList extends Component {
    render() {
        return (
            <Table className="coin-table">
      <thead>
        <tr>
          <th>NAME</th>
          <th>TICKER</th>
          <th>PRICE</th>
          {this.props.showBalance ? <th>BALANCE</th> : <th>***</th>}
          <th>ACTION</th>
        </tr> 
      </thead>
      <tbody>
        {
          this.props.coinData.map( ({name,ticker,price, balance}) => 
          <Coin key={ticker} 
                handleRefresh = {this.props.handleRefresh}
                name = {name} 
                ticker = {ticker} 
                showBalance = {this.props.showBalance}
                price={price}
                balance = {balance}/>
          )
        }
      </tbody>
      </Table>
        )
    }
}
