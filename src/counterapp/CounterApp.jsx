import React, {useState} from 'react'


const CounterApp = ({valor}) => {

    const [counter, setCounter] = useState(valor)


    //javascript
    const incrementar = () =>{

        // counter = counter + 1
        setCounter(counter + 1)
    }
    const decrementar = () =>{

        // counter = counter + 1
        setCounter(counter - 1)
    }

    const reset = () => {
        setCounter (valor)

    }

    return (
        <div>
           <h1>Counter App</h1>
           <hr />
           <h3>Contador: {counter}</h3>
           <button className = "btn btn-info mt-3 me-2" onClick = {decrementar}>-1</button>
           <button className = "btn btn-info mt-3 me-2" onClick = {reset}>reset</button>
           <button className = "btn btn-info mt-3" onClick = {incrementar}>+1</button>
        </div>
    )
}

export default CounterApp
