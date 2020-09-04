import React from 'react'

export  const SpreadOperator = () => {
    // Spread operator concetenate k lie use hota hai 
    const fullname = ["muhammad","faraz"];
    const biodata = [1,...fullname,21,"male"];
    console.log(biodata)
    // output :[1,muhammad,faraz,21,male]

    const shootergame = ["call of duty","far cry","pubg","free fire"]
    const [first,second,...remaining] = shootergame;
    console.log(second);
    console.log(remaining)
    // output: farcry ,[pubg,free fire]


    const fullnameobj={
        fname:"Muhammad",
        lname:"Faraz",
    }
    const data={
        id:1,
        ...fullnameobj, //used in concetenate
        age:21,
        gender:"male",
    }
    console.log(data)
    return (
        <>
            
        </>
    )
}
