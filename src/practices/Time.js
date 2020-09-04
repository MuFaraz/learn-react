import React, { useState } from 'react';

const Time=()=>{
    let time = new Date().toLocaleTimeString();
  let [ctime, newTime] = useState(time);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    newTime(time);
    
  }


  setInterval(updateTime,1000); // 1 sec k baad change hota rahega

    return(
        <>
      <h1>Time on click event</h1>
      <p>{ctime}</p>
      <button onClick={updateTime}>Click to get time</button>
        </>
    )
}
export default Time;
