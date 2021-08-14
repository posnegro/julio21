import React from "react";

const Asincronismo = () => {
  //Promesas

  // const validacion = true

  // const promesaValidacion = () =>{

  //     return new Promise((resolve, reject)=>{

  //         setTimeout(()=>{
  //             if(validacion){
  //                 resolve("todo bien");
  //             }
  //             else{
  //                 reject("no llego :´(");
  //             }
  //         },2000);
  //     });
  // };
  // promesaValidacion()
  // .then((respuesta)=> console.log(respuesta)).catch((error)=>console.log(error))

  //fetch
  // fetch("https://www.superheroapi.com/api.php/3957824774315546/search/Spider-man")
  // .then((response) => response.json())
  // .then(({results}) =>console.log(results))
  // .catch((error) =>console.log(error));

  //Async await

  const getHeroe = async () => {
      try{
    const resp = await fetch(
      "https://www.superheroapi.com/api.php/3957824774315546/search/Spider-man");
    const data = await resp.json()
    console.log(data.results)  
  } catch (error) {
      
  };
  }
  

  return (
    <div>
      <h1>Asincronismo en javascript</h1>
    </div>
  );
  
};

export default Asincronismo;
