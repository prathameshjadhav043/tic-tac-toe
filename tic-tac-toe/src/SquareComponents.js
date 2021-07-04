import React from 'react'

export const SquareComponents = (props) => {
    const classes = props.className?`${props.className} square`:'square';
    return (
        <span className={classes} onClick={props.onClick}>{props.state}</span>
    );
}
