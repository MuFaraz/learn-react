import React, { useState } from 'react';

const InputForm = () => {
    // First Name
    let [fname, setFirstname] = useState("");
    let [name, setName] = useState('');
    // Last Name
    let [LastName, setLastName] = useState("");
    let [lname, setLName] = useState('');
    const getFirstName = (event) => {
        setFirstname(event.target.value);
    }
    const getValueLast = (event) => {
        setLastName(event.target.value);
        console.log(event.target.value);
    }
    const ClickEvent = (event) => {
        event.preventDefault();
        setName(fname);
        setLName(LastName);
    }
    return (
        <>
            <form onSubmit={ClickEvent}>
                <h1>Hello {name} {lname} </h1>
                <input type="text" placeholder="Enter your name" onChange={getFirstName} value={fname} />
                <input type="text" placeholder="Enter your Last Name" onChange={getValueLast} value={LastName} />

                <button type="submit"> Click</button>
            </form>
        </>
    )
}
export default InputForm;