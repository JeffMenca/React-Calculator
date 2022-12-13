import React from "react";
import '../stylesheets/button.css'

function Button(props) {
    const isOperator = value => {
        return isNaN(value) && (value !== '.') && (value !== '=') && (value!=='⌫');
    };
    const isEqual = value => {
        return (value == '=');
    };

    if (isOperator(props.children)) {
        return (
            <button className="button-container operator"
            onClick={()=>props.handleClick(props.children)}>
                {props.children}
            </button>
        ); 
    } else if (isEqual(props.children)) {
        return (
            <button className="button-container equal"
                onClick={() => props.handleClick(props.children)}>
                {props.children}
            </button>
        );
    }else {
        return (
            <button className="button-container"
            onClick={()=>props.handleClick(props.children)}>
                {props.children}
            </button>
        ); 
    } 
}
export default Button;