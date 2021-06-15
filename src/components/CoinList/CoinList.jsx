import React from 'react';
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const Table = styled.table`
    margin: 50px auto 50px auto; 
    display: inline-block;
    font-size: 1.4rem;
`;

export default function CoinList(props) {

  const handleClick = (event) =>{
    //Prevent the default action of submitting the form
    event.preventDefault();

    props.handleRefresh();
  }

  return (
    <Table className="coin-table">
    <thead>
      <tr>
        <th>NAME</th>
        <th>TICKER</th>
        <th>PRICE 
            <button onClick={handleClick}> Refresh </button>
        </th>
        <th>BALANCE</th> 
        <th>ACTION</th>
      </tr> 
    </thead>
    <tbody>
    {
      props.coinData.map( ({key,name,ticker,price,balance}) => 
      <Coin 
            key= {key} 
            id={key}
            name = {name} 
            ticker = {ticker} 
            price={price}
            balance = {balance}
            showBalance = {props.showBalance}
            handleRefresh = {props.handleRefresh}
            handleCoinBalance = {props.handleCoinBalance}/>
      )
    }
    </tbody>
    </Table>
  );
}
