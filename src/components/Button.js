import React from "react";

function Button({strawBerry, banana, apple, kiwi, setStrawberry, setBanana, setApple, setKiwi, firstName, surName, age, zipCode, deliveryFrequency, deliveryTime, note, checkedTerms, children}) {

    console.log(children)
    console.log(strawBerry, banana, apple, kiwi)

    if (children === "Reset") {
        return <button
            className="resetButton"
            type="button"
            onClick={() => {
                setStrawberry(0);
                setBanana(0);
                setApple(0);
                setKiwi(0);
            }}
        >
            {children}
        </button>
    } else if (children === "Verzend") {
        return <button
            type="button"
            onClick={() => {
                console.log(strawBerry)
                console.log(banana)
                console.log(apple)
                console.log(kiwi)

                console.log(firstName)
                console.log(surName)
                console.log(age)
                console.log(zipCode)

                console.log(deliveryFrequency)
                console.log(deliveryTime)
                console.log(note)
                console.log(checkedTerms)
            }}
        >
            {children}
        </button>
    }
}

export default Button;