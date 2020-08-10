import React from "react";
import './Button.css';

const Button = props => (
    <button
        onClick={props.clicked}
        className={['Button', props.type].join(' ')}
    >
        {props.label}
    </button>
);

export default Button;