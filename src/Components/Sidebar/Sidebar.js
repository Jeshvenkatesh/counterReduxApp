import React from 'react';
import { connect } from 'react-redux';
import classes from './Sidebar.module.css';

const Sidebar = (props) => {
    return(
        <div className={classes.Sidebar}>
            <h1>Total Count: <br></br><span>{props.count}</span></h1>
        </div>
    );
}

const getValFromStore=(globalStore)=>{
    return{
        count:globalStore.totalCount
    }
}
export default connect(getValFromStore)(Sidebar);