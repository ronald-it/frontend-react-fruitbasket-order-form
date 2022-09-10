import React from "react";

function FruitCountModifier({eventHandler, input, children}) {

    return <button
        type="button"
        onClick={() => {
            eventHandler(input)
        }}
    >
        {children}
    </button>
}

export default FruitCountModifier;