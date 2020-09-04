import React, { useState, useEffect } from "react";
import axios from "axios";

const ApiUseEffect = () => {
    const [num, setNum] = useState(1);
    const [name, setname] = useState("");
    const [move, setmove] = useState("");

    useEffect(()=>{
        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            console.log(res);
            setname(res.data.name)
            setmove(res.data.moves.length);
        }
        getData();
    })
    return (
        <>
            <h1>Call Api Pokemon by useEffect and axios</h1>
            <p>You selected {num}</p>
            <p>You selected {name}</p>
            <p>it has {move} moves</p>
            
            <select value={num} onChange={(event) => {
                setNum(event.target.value);
            }}>
                <option value="1">1</option>
                <option value="25">25</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </>
    )
}
export default ApiUseEffect;