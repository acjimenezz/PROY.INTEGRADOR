// import SearchBar from './components/SearchBar.jsx';
// import characters, { Rick } from './data.js';
// import Card from './components/Card.jsx';

import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
/////////////////////
import { useState } from "react";
import axios from "axios";
const URL = "https://rickandmortyapi.com/api/character";



function App() {
   const [characters, setCharacters] = useState([]);
   // [], [c1], [c1, c2]
 
   const onSearch = (id) => {
     axios(`${URL}/${id}`)
       .then(({ data }) => {
         if (data.name) {
           setCharacters([...characters, data]);
         } else {
           window.alert("¡No hay personajes con este ID!");
         }
       })
       .catch((error) => {
         window.alert("Ese id no existe");
       });
   };


   const onClose = (id) => {
      const filtered = characters.filter((chars) => chars.id !== id);
      setCharacters(filtered);
    };

   return (
      
      <div className='App'>
         {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
         <Nav onSearch={onSearch}/>
         <Cards characters={characters} onClose={onClose}/>
         {/* <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         /> */}
      </div>
      // <div><img src={"./public/rick-y-morty.jpg"} /></div>
      
   );
}

export default App;
