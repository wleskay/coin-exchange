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
        </tr> 
      </thead>
      <tbody>
        {
          this.props.coinData.map( ({name,ticker,price}) => 
          <Coin key={ticker} name = {name} ticker = {ticker} price={price}/>)
        }
      </tbody>
      </Table>
        )
    }
}
