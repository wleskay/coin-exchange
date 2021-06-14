import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
    font-size: 2rem;
    text-align: left;
    padding: 1.5rem 0 1.5rem 5rem;

`;


export default function AccountBalance (props) {
    
    const handleClick = (event) => {
        //Prevent the default action of submitting the form
        event.preventDefault();
        props.handleShowBalance(!props.showBalance);
    };
    const buttonText = props.showBalance ? 'Hide Balance' : 'Show Balance';
    let content = null;
    if (props.showBalance){
        content = <>Balance: ${props.amount}</>
    }
    return (
        <Section>
        {content}
        <button onClick={handleClick}> {buttonText}</button>
        </Section>
        
    );
}



AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}