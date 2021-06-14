import React from 'react';
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const Table = styled.table`
    margin: 50px auto 50px auto; 
    display: inline-block;
    font-size: 1.4rem;
`;

export default function CoinList(props) {
  return (
    <Table className="coin-table">
    <thead>
      <tr>
        <th>NAME</th>
        <th>TICKER</th>
        <th>PRICE</th>
        {props.showBalance ? <th>BALANCE</th> : <th>***</th>}
        <th>ACTION</th>
      </tr> 
    </thead>
    <tbody>
    {
      props.coinData.map( ({key,name,ticker,price,balance}) => 
      <Coin 
            key= {key} 
            id={key}
            handleRefresh = {props.handleRefresh}
            name = {name} 
            ticker = {ticker} 
            showBalance = {props.showBalance}
            price={price}
            balance = {balance}/>
      )
    }
    </tbody>
    </Table>
  );
}
