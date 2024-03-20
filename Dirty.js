import React, { useState } from 'react'
import './App.css'

function Dirty() {
    const[isFocused, setIsFocused] = useState(false);
    const handlefocus = ()=> {
        setIsFocused(true);
    };
    const handleBlur = () => {
        setIsFocused(false);
    };
  return (
    <div>
        <input
        type='text'
        onFocus={handlefocus}
        onBlur={handleBlur}
        placeholder='hello'
        style={{
            border: isFocused ? '2px solid blue' : '1px solid grey', padding: '5px',
        }}
        />
        <p>{isFocused ? 'Input is focused!' : 'Input is not focused.'}</p>




    </div>
  )
}

export default Dirty