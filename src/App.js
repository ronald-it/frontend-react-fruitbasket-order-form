import React from 'react';
import './App.css';
import Button from "./components/Button";
import FruitCountModifier from "./components/FruitCountModifier";
import TextInput from "./components/TextInput";

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
                    <p>🍓 Aardbeien</p>
                    <FruitCountModifier
                    eventHandler={strawBerrySubtractor}
                    input={strawBerry}
                    >
                        -
                    </FruitCountModifier>
                    <p>{strawBerry}</p>
                    <FruitCountModifier
                        eventHandler={strawBerryAdder}
                    >
                        +
                    </FruitCountModifier>
                </div>
                <div className="bananas">
                    <p>🍌 Bananen</p>
                    <FruitCountModifier
                        eventHandler={bananaSubtractor}
                        input={banana}
                    >
                        -
                    </FruitCountModifier>
                    <p>{banana}</p>
                    <FruitCountModifier
                        eventHandler={bananaAdder}
                    >
                        +
                    </FruitCountModifier>
                </div>
                <div className="apples">
                    <p>🍏 Appels</p>
                    <FruitCountModifier
                        eventHandler={appleSubtractor}
                        input={apple}
                    >
                        -
                    </FruitCountModifier>
                    <p>{apple}</p>
                    <FruitCountModifier
                        eventHandler={appleAdder}
                    >
                        +
                    </FruitCountModifier>
                </div>
                <div className="kiwis">
                    <p>🥝 Kiwi's</p>
                    <FruitCountModifier
                        eventHandler={kiwiSubtractor}
                        input={kiwi}
                    >
                        -
                    </FruitCountModifier>
                    <p>{kiwi}</p>
                    <FruitCountModifier
                        eventHandler={kiwiAdder}
                    >
                        +
                    </FruitCountModifier>
                </div>
                <Button
                eventHandler={counterReset}
                >
                    Reset
                </Button>
            </div>
            <div className="contactForm">
                <TextInput
                value={firstName}
                stateChanger={setFirstName}
                >
                    Voornaam
                </TextInput>
                <TextInput
                    value={surName}
                    stateChanger={setSurName}
                >
                    Achternaam
                </TextInput>
                <TextInput
                    value={age}
                    stateChanger={setAge}
                >
                    Leeftijd
                </TextInput>
                <TextInput
                    value={zipCode}
                    stateChanger={setZipCode}
                >
                    Postcode
                </TextInput>
                <label>Bezorgfrequentie</label>
                <select
                    name="deliveryFrequency"
                    id="deliveryFrequency"
                    value={deliveryFrequency}
                    onChange={(e) => setDeliveryFrequency(e.target.value)}
                >
                    <option>Kies de frequentie</option>
                    <option value="weekly">Iedere week</option>
                    <option value="biweekly">Om de week</option>
                    <option value="monthly">Iedere maand</option>
                </select>
                <div className="radioButtonsForm">
                    <label
                    htmlFor="afternoonRadio"
                    >
                        <input
                            type="radio"
                            value="afternoon"
                            name="deliveryMoment"
                            id="afternoonRadio"
                            onChange={(e) => toggleDeliveryTime(e.target.value)}
                        />
                        Overdag
                    </label>
                    <label
                    htmlFor="eveningRadio"
                    >
                        <input
                            type="radio"
                            value="evening"
                            name="deliveryMoment"
                            id="eveningRadio"
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
                <Button
                eventHandler={handleSubmit}
                >
                    Verzend
                </Button>
            </div>
        </>
    );
}

export default App;
