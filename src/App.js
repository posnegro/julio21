
//como se crea un componente
import React from "react"


const App =({name, edad})=>{

  //Crear codigo de javascript
  //Funciones
  //Variables
  console.log (name)
  console.log (edad)

  // const nombre = "Federico Martinez"

return (

  <div>
    <h1>Soy {name}</h1>
    <hr />
    <p>Este es mi primer componete de React</p>
    <p>Mi edad es {edad}</p>
  </div>
)

}

export default App