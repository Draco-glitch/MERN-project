import './App.css';
<<<<<<< HEAD
import React, { useState } from 'react';
import Form from './components/Form';
import Display from './components/Display';
import NinjaForm from './components/NinjaForm';
import NinjaDisplay from './components/NinjaDisplay';

function App() {
  const [ boxColorArray, setBoxColorArray ] = useState([]);

  // Ninja Bonus: Add a second input that takes in an integer. 
  //    This integer will allow the user to specify the height and width of the generated box.
  //    Using an object to hold both the integer and the color together
  const [ ninjaBoxArray, setNinjaBoxArray ] = useState([])

  return (
    <div className="App">
      <h1>Standard Assignment</h1>
      <Form boxColorArray={ boxColorArray } setBoxColorArray={ setBoxColorArray } />
      <Display boxColorArray={ boxColorArray } />
      <hr />
      <h1>Ninja Assignment</h1>
      <NinjaForm ninjaBoxArray={ ninjaBoxArray } setNinjaBoxArray={ setNinjaBoxArray } />
      <NinjaDisplay ninjaBoxArray={ ninjaBoxArray } />
      
=======
import React, { useEffect, useState } from 'react';

function App() {
 
  const [pokemon, setPokemon] = useState([]);

  
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response => {
       
        return response.json()
      })
      .then(response => {
        
        setPokemon(response.results)
      })
      .catch((err) => {
        console.log(err);
      })
    
    
  }, []);  
  

  
  return (
    <div className="App" style={{ width: "200px", margin: "auto" }}>
      <ul>
        {
          pokemon.map((pokemonObj, index)=>{
            return (<li key={index}>{pokemonObj.name}</li>)
          })
        }
      </ul>
>>>>>>> e86aae62ae0f425cb321038234c1dd70444dc37b
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> e86aae62ae0f425cb321038234c1dd70444dc37b
