import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const Like = (props) => {
    let classes = "fa fa-heart";
    if(!props.liked) classes +="-o";
    return (
        <i  onClick={props.onClick}
            style={{cursor: "pointer"}}
            className={classes} aria-hidden="true"/>
    );
}
export default  Like;