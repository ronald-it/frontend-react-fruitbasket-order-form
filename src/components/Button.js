import React from "react";

function Button({eventHandler, children}) {
        return <button
            className="resetSubmitButton"
            type="button"
            onClick={() => {
                eventHandler()
            }}
        >
            {children}
        </button>
}

export default Button;