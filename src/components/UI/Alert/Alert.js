import React from 'react';
import './Alert.css'

const Alert = props => {
    if(!props.clickDismissable){
        return (<div style={{display: props.show ? 'flex' : 'none'}} className={['Alert', props.type].join(' ')}>
                {props.children}
                {typeof props.dismiss  !== 'undefined' ? <a className="alert-a" onClick={props.dismiss}>X</a> : ''}
                </div>)
    }

    return (<div style={{display: props.show ? 'flex' : 'none'}} onClick={props.dismiss} className={['Alert', props.type].join(' ')}>
        {props.children}
    </div>)
};

export default Alert;