import React from "react";
import "../stylesheets/buttonClear.css"

const ButtonClear = (props) => (
    <button className="button-clear" onClick={props.handleClear}>
        {props.children}
    </button>
);

export default ButtonClear;