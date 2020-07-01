import React,{useState} from 'react'

import './Functional.css'

const Functional = (props) => {

let [number,setNumber] = useState(0)

const addHandler = () =>{
    setNumber(number + 1)
}
const minHandler = () =>{
    setNumber(number -1)
}
const resetHandler = () =>{
    setNumber(number = 0)
}
if(number < 0){
    alert('Nilai Tidak Boleh Negatif')
}
    return (
        <div>
            <h1>Count: {number}</h1>
            <button className="plus" onClick={addHandler}>+</button>
            <button className="min" onClick={minHandler}>-</button>
            <button className="reset" onClick={resetHandler}>Reset</button>
        </div>
    )
}

export default Functional;