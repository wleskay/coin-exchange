import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
    font-size: 2rem;
    text-align: left;
    padding: 1.5rem 0 1.5rem 5rem;

`;


export default class AccountBalance extends Component {
    
    handleClick = (event) => {
        //Prevent the default action of submitting the form
        event.preventDefault();
        this.props.handleShowBalance(!this.props.showBalance);
    }
    render() {
        const buttonText = this.props.showBalance ? 'Hide Balance' : 'Show Balance';
        let content = null;
        if (this.props.showBalance){
            content = <>Balance: ${this.props.amount}</>
        }

        return (
            <Section>
            {content}
            <button onClick={this.handleClick}> {buttonText}</button>
            </Section>
            
        )
    }
}



AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}