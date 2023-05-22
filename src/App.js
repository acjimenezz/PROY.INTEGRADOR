// import SearchBar from './components/SearchBar.jsx';
// import characters, { Rick } from './data.js';
// import Card from './components/Card.jsx';
import {Routes} from 'react-router-dom';
import { Route } from 'react-router-dom';
import Detail from './views/Detail';
import About from './views/About';

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
      <Routes>
   
         <Route path='/About' Component={About}/>
         <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
         <Route path='/detail/:id' element={<Detail characters={characters}/>}/>

     
      </Routes>
      </div>  
            
   );
}

export default App;
