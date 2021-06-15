import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Td = styled.td `
    border: 1px solid #ccc;
    width: 25vh;
`;

export default function Coin(props) {
    
  const handleClickBuy = (event) =>{
        //Prevent the default action of submitting the form
        event.preventDefault();

        props.handleCoinBalance(props.id,true);
  }

  const handleClickSell = (event) =>{
    //Prevent the default action of submitting the form
    event.preventDefault();

    props.handleCoinBalance(props.id,false);
}
    
  return(
      <tr>
        <Td>{props.name}</Td>
        <Td>{props.ticker}</Td>
        <Td>${props.price}</Td>
        {props.showBalance ? <Td>{props.balance}</Td> : <Td>***</Td> }
        <Td>
          <form action = "#" method = "POST">
            <button onClick={handleClickBuy}>Buy</button>
            <button onClick={handleClickSell}>Sell</button>
          </form>
        </Td>
      </tr>
  );
    
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}
