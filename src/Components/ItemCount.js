import React from 'react';

//adentro de los paréntesis puedo llamar (props)
//o puedo acceder directamente a una prop con las llaves ({})
const itemCount = ({contador, onAdd}) => {
  return (
    <div className='is-flex is-centered' style={{margin: "10px"}}>
      <div className='button is-primary' onClick={()=>onAdd('-')}> - </div>
      <div style={{margin: "0 50px 0 50px"}}>{contador}</div>
      <div className='button is-warning' onClick={()=>onAdd('+')}> + </div>
    </div>
  )
  //La arrow function -en Onclick- me permite pasarle un parámetro a onAdd
}




export default itemCount;


/* Ejercicio de clase
function App() {
    const [estado, setEstado] = useState(0);

    const changeEstado = () => {
    setEstado(1)
  }

  return (
    <div>
      <h1>Contador de clicks</h1>
      <button onClick={() => setEstado(estado + 1)}> Click!</button>
      <p>Clickeaste {estado} veces</p>
    </div>
  );
}
*/



