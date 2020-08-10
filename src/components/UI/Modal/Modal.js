import React from 'react';
import Backdrop from "../Backdrop/Backdrop";
import './Modal.css';

const Modal = props => (
    <>
        <Backdrop show={props.show} clicked={props.closed}/>
    <div className="Modal" style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
    }}>
        <div className="modal-title">
            <h3>{props.title}</h3>
            <a className="modal-a" href="#" onClick={props.closed}>X</a>
        </div>
        {props.children}
    </div>
        </>
);

export default Modal;