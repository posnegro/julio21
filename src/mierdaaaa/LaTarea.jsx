import React, {useState} from 'react'

const LaTarea = ({tarea}) => {

    const [counter, setCounter] = useState(tarea)

    const mensajeClave = () => {
        setCounter("Mi amigo el andres")
    }
    const reset = () => {
        setCounter (tarea)

    }

    return (
        <div>

        <h1>{counter}</h1>
        <button className = "btn btn-info mt-3 me-2" onClick = {mensajeClave}>Clave</button>
        <button className = "btn btn-info mt-3 me-2" onClick = {reset}>Origen</button>

        </div>
    )
}

export default LaTarea
