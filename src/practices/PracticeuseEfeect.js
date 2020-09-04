import React, { useState, useEffect } from 'react';
const PracticeuseEfeect = () => {

    const [num, setNum] = useState(0);
    const [nums, setNums] = useState(0);
    
    useEffect(() => {
        // alert("clicke");
    }, [num]) //agr hm [] aese khaali chordenge to mtlb aik hi refresh pe call hoga useeffect 
    // hm ne num pass kia hai mtlb jb bhi num change hoga useeffect call hoga

    useEffect(() => {
        document.title=`You click ${nums} time`;
    }, [nums])
    return (
        <>
            <h1>UseEfect Practice</h1>
            <button onClick={() => {
                setNum(num + 1)
            }}>Click {num} time</button>

            <button onClick={() => {
                setNums(nums + 1)
            }}>Click To change above document title </button>


        </>
    )
}
export default PracticeuseEfeect;