import React from "react";

function Button(counterReset) {
    return                 <button
        className="resetButton"
        type="button"
        onClick={counterReset}
    >
        Reset
    </button>
}

export default Button;