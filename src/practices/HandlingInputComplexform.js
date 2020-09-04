import React, { useState } from 'react';

const HandlingInputComplexform = () => {
    // First Name
    let [fullname, setname] = useState({
        fname: '',
        lname: '',
        age:'',
        qual:''
    });
    let [ffname,setffname] =useState({
        fffname: '',
        llname: '',
        age:''
    })
    // Last Name
    const getName = (event) => {
        console.log(event.target.value);
        // let value=event.target.value;
        // let name=event.target.name;

        let {name,value}=event.target;

        setname((prev)=>{
console.log(prev)
// By using Spread operator

return{
    ...prev,
    [name]:value //is ka jo name hai waha pe value daaldo bs input field ka name same rakhna hai
} 

// OR

// if (name==='fname'){
// return{
//      //Check Spread operator component to learn
//    fname:value,
//    lname:prev.lname,
//    age:prev.age,

// //    or fname:value,lname:prev.value,age,prev.value
   
// }
// }else if (name==='age'){
//     return{
//         fname:prev.fname,
//         lname:prev.lname,
//         age:value,
//     }
// }
// else{
//     return{
//         fname:prev.fname,
//         lname:value,
//         age:prev.age,
        
//     }
// }
        })
        
    }

    const ClickEvent = (event) => {
        event.preventDefault();
        setffname({
            fffname:fullname.fname,
            llname:fullname.lname
        })
       
        alert("form submited");
    }
    return (
        <>
            <form onSubmit={ClickEvent}>
                <h1>Hello {fullname.fname} {fullname.lname} {fullname.age} {fullname.qual} </h1>
                <input type="text" placeholder="Enter your name" onChange={getName} name="fname"
                value={fullname.fname} 
                />
                <input type="text" placeholder="Enter your Last Name" onChange={getName} name="lname"
                 value={fullname.lname}
                />
                 <input type="text" placeholder="Enter your Age" onChange={getName} name="age"
                 value={fullname.age}
                />
                <input type="text" placeholder="Enter your Qualification" onChange={getName} name="qual"
                 value={fullname.qual}
                />

                <button type="submit"> Click</button>
            </form>
        </>
    )
}
export default HandlingInputComplexform;