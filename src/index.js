import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const initialState={
    totalCount : 0
}
const mainReducer=(prevState=initialState,action)=>{
    if(action.type==='INCREMENT_BY_ONE'){
        const updatedVal = prevState.totalCount + 1;
        return{...prevState, totalCount:updatedVal}
    }else if(action.type === 'DECREMENT_BY_ONE'){
        const updatedVal = prevState.totalCount - 1;
        return{...prevState, totalCount:updatedVal}
    }else if(action.type === 'INCREMENT_BY_FIFTY'){
        const updatedVal = prevState.totalCount +  50;
        return{...prevState, totalCount:updatedVal}
    }else if(action.type === 'DECREMENT_BY_FIFTY'){
        const updatedVal = prevState.totalCount - 50;
        return{...prevState, totalCount:updatedVal}
    }
    return{...prevState}
}
const globalStore = createStore(mainReducer)

ReactDOM.render(<Provider store={globalStore}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
