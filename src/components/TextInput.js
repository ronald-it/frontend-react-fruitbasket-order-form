import React from "react";

function TextInput({value, stateChanger, children}) {

    return <label>
        {children}
        <input
            value={value}
            onChange={(e) => stateChanger(e.target.value)}
        />
    </label>
}

export default TextInput;