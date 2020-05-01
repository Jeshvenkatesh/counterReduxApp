import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './ButtonSection.module.css';
import CardButton from '../CardButton/CardButton';

class ButtonSection extends Component {
    render() {
        return(
            <div className={classes.MainContainer}>
                <CardButton btnClick={this.props.onIncrementOne} label="Count: +1" bgColor="#957DAD" />
                <CardButton btnClick={this.props.onDecrementOne} label="Count: -1" bgColor="#D291B6" />
                <CardButton btnClick={this.props.onIncrementFifty} label="Count: +50" bgColor="#FEC8D8" />
                <CardButton btnClick={this.props.onDecrementFifty} label="Count: -50" bgColor="#FFDFD3" />
            </div>
        )
    }
}
const dispatchAvailableToReducer=(dispatch)=>{
     return{
         onIncrementOne: ()=> dispatch({type: 'INCREMENT_BY_ONE'}),
         onDecrementOne: ()=> dispatch({type : 'DECREMENT_BY_ONE'}),
         onIncrementFifty: ()=> dispatch({type: 'INCREMENT_BY_FIFTY'}),
         onDecrementFifty: ()=> dispatch({type : 'DECREMENT_BY_FIFTY'})
     }
}
export default connect(null,dispatchAvailableToReducer)(ButtonSection);