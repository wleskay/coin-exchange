import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Section = styled.section`
    background-color: rgb(42, 76, 109);
    min-height: 20vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    flex: 1;
    margin: 5;
    color: white;
    font-size: 1.5rem;
`;

const Button = styled.button`
    border: 1px solid #000;
    background: grey;
    font-size: 1.5rem;
    text-align: center;
    padding: 0rem 1rem 0rem 1rem;

`;





export default function AccountBalance (props) {
    
    const handleClick = (event) => {
        //Prevent the default action of submitting the form
        event.preventDefault();
        props.handleShowBalance(!props.showBalance);
    };

    const handleHeliClick = (event) => {
        //Prevent the default action of submitting the form
        event.preventDefault();
        props.handleIncreaseBalance();
    };

    const buttonText = props.showBalance ? 'Hide Balance' : 'Show Balance';
    let content = null;
    if (props.showBalance){
        content = <>Balance: ${props.amount}</>
    }
    else{
        content = <>Balance: ***</>
    }
    return (
        
        <Section>
            <h3>
                <Button onClick={handleClick}> {buttonText}</Button>
                {content}
            </h3>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwebstockreview.net%2Fimages%2Fhelicopter-clipart-yellow-helicopter-9.png&f=1&nofb=1" 
            alt="my heli" 
            height = {50}
            width = {50}
            onClick={handleHeliClick}/>
        </Section>
        
        
    );
}



AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}