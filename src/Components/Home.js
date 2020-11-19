import React from 'react';


const Home = (props) => {
    return (
        <div>
            <h1 className="title" style={{textAlign: "center", marginTop: "10px"}}>{props.name}</h1>
        </div>
    );
}


export default Home;


/* Cambiar saludo: Greeting


const Home = (props) => {

    const [greeting, setGreeting] = useState('Welcome to Bambole!');
    const changeGreeting = () => {
  //Actualizar estado del greeting.
  //No se recarga la página, actualiza el h2 en el DOM virtual y luego éste en el real DOM. 
  //Se ejecuta siempre. Pero como setGreeting tiene el mismo valor, no va a haber cambios en el DOM.
  setGreeting('¡Bienvenidxs a Bambole!')
    }

    return (
        <div>
            <h2>{greeting}</h2>
            <button className="btn" onClick={changeGreeting}>Change greeting language</button>
        </div>
    )
}



/*Para volver al estado inicial, se puede utilizar el mismo botón y que haga toggle*/
/*No se podría hacer un greeting = "hola" porque estás cambiando el estado directamente y no desde la función greeting*/


