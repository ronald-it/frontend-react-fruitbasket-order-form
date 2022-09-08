import React from 'react';
import './App.css';

function App() {
    const [strawBerry, setStrawBerry] = React.useState(0);
    const [banana, setBanana] = React.useState(0);
    const [apple, setApple] = React.useState(0);
    const [kiwi, setKiwi] = React.useState(0);

    function strawBerrySubtractor(input) {
        if (input > 0) {
            setStrawBerry(strawBerry - 1)
        }
    }

    function strawBerryAdder(input) {
        setStrawBerry(strawBerry + 1)
    }

    function bananaSubtractor(input) {
        if (input > 0) {
            setBanana(banana - 1)
        }
    }

    function bananaAdder(input) {
        setBanana(banana + 1)
    }

    function appleSubtractor(input) {
        if (input > 0) {
            setApple(apple - 1)
        }
    }

    function appleAdder(input) {
        setApple(apple + 1)
    }

    function kiwiSubtractor(input) {
        if (input > 0) {
            setKiwi(kiwi - 1)
        }
    }

    function kiwiAdder(input) {
        setKiwi(kiwi + 1)
    }

    function counterReset() {
        setStrawBerry(0);
        setBanana(0);
        setApple(0);
        setKiwi(0);
    }

    const [surName, setSurName] = React.useState("");
    const [firstName, setFirstName] = React.useState("");
    const [age, setAge] = React.useState(0);
    const [zipCode, setZipCode] = React.useState("");
    const [deliveryFrequency, setDeliveryFrequency] = React.useState("");
    const [deliveryTime, toggleDeliveryTime] = React.useState("");
    const [note, setNote] = React.useState("");
    const [checkedTerms, toggleCheckedTerms] = React.useState("");

    function handleSubmit () {
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
    }

    return (
        <>
            <div className="titleAligner">
            <h1>Fruitmand bezorgservice</h1>
            </div>
            <div className="fruits">
                <div className="strawberries">
                    <p>🍓 Aarbeien</p>
                    <button
                        type="button"
                        onClick={() => strawBerrySubtractor(strawBerry)}
                    >
                        -
                    </button>
                    <p>{strawBerry}</p>
                    <button
                        type="button"
                        onClick={() => strawBerryAdder(strawBerry)}
                    >
                        +
                    </button>
                </div>
                <div className="bananas">
                    <p>🍌 Bananen</p>
                    <button
                        type="button"
                        onClick={() => bananaSubtractor(banana)}
                    >
                        -
                    </button>
                    <p>{banana}</p>
                    <button
                        type="button"
                        onClick={() => bananaAdder(banana)}
                    >
                        +
                    </button>
                </div>
                <div className="apples">
                    <p>🍏 Appels</p>
                    <button
                        type="button"
                        onClick={() => appleSubtractor(apple)}
                    >
                        -
                    </button>
                    <p>{apple}</p>
                    <button
                        type="button"
                        onClick={() => appleAdder(apple)}
                    >
                        +
                    </button>
                </div>
                <div className="kiwis">
                    <p>🥝 Kiwi's</p>
                    <button
                        type="button"
                        onClick={() => kiwiSubtractor(kiwi)}
                    >
                        -
                    </button>
                    <p>{kiwi}</p>
                    <button
                        type="button"
                        onClick={() => kiwiAdder(kiwi)}
                    >
                        +
                    </button>
                </div>
                <button
                    className="resetButton"
                    type="button"
                    onClick={counterReset}
                >
                    Reset
                </button>
            </div>
            <div className="contactForm">
                <label>
                    Voornaam
                    <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    />
                </label>
                <label>
                    Achternaam
                    <input
                        value={surName}
                        onChange={(e) => setSurName(e.target.value)}
                    />
                </label>
                <label>
                    Leeftijd
                    <input
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </label>
                <label>
                    Postcode
                    <input
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                    />
                </label>
                <label>Bezorgfrequentie</label>
                <select
                    name="deliveryFrequency"
                    id="deliveryFrequency"
                    value={deliveryFrequency}
                    onChange={(e) => setDeliveryFrequency(e.target.value)}
                >
                    <option value="weekly">Iedere week</option>
                    <option value="biweekly">Om de week</option>
                    <option value="monthly">Iedere maand</option>
                </select>
                <div className="radioButtonsForm">
                    <label>
                        <input
                            type="radio"
                            value={deliveryTime}
                            onChange={(e) => toggleDeliveryTime(e.target.value)}
                        />
                        Overdag
                    </label>
                    <label>
                        <input
                            type="radio"
                            value={deliveryTime}
                            onChange={(e) => toggleDeliveryTime(e.target.value)}
                        />
                        's Avonds
                    </label>
                </div>
                <label>
                    Opmerking
                </label>
                <textarea
                    id="noteField"
                    name="noteField"
                    rows="4"
                    cols="50"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                >
                </textarea>
                <label>
                    <input
                        type="checkbox"
                        name="terms-and-conditions"
                        id="terms-and-conditions"
                        checked={checkedTerms}
                        onChange={() => toggleCheckedTerms(!checkedTerms)}
                    />
                    Ik ga akkoord met de voorwaarden
                </label>
                <button
                    type="button"
                    onClick={handleSubmit}
                >
                    Verzend
                </button>
            </div>
        </>
    );
}

export default App;
