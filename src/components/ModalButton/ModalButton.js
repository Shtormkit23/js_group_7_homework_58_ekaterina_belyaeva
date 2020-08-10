import React from "react";
import './ModalButton.css';

const ModalButton = props => (
    <button
        onClick={props.clicked}
        className="ModalButton"
    >
        {props.children}
    </button>
);

export default ModalButton;