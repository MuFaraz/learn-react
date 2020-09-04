import React, { useState } from 'react';

const ValueIncrease=()=>{
    const [count, setCount] = useState(0);

    const IncNum = () => {
      setCount(count + 1);
      console.log("click hogaya bhai");
    }
    return(
        <>
        <h1>Increament Value on click</h1>
        <h1>{count}</h1>
        <button onClick={IncNum}>Click to increase</button>
        </>
    )
}
export default ValueIncrease;