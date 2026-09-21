import React, {useEffect, useState}from 'react'

function UseEffect() {
    const [counter, setCounter] = useState(0);
    const[pointer, setPointer] = useState(1000);

    useEffect(() => {
    console.log("Hey, I am from useEffect hook, counter=" + counter);
    }, [counter]);
  return (
    <div>
      UseEffect
     <h2 style={{color : 'blue'}}>count = {counter}</h2>
     <h2 style={{color:'red'}}>pointer={pointer}</h2>
      <div></div>
      <button onClick={() => setCounter(counter + 10)}>Increment</button>


    </div>
  )
}

export default UseEffect;
