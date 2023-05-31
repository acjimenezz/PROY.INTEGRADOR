// import SearchBar from './components/SearchBar.jsx';
// import characters, { Rick } from './data.js';
// import Card from './components/Card.jsx';
import {Route,Routes,useLocation,useNavigate} from 'react-router-dom';
import { useState,useEffect } from "react";
import axios from "axios";
import Detail from './views/Detail';
import About from './views/About';
import Form from './views/Form/Form';
import { connect } from 'react-redux';
import { removeFav } from './redux/actions';

import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav';
import Favorites from './components/Favorites';
/////////////////////

const URL = "https://rickandmortyapi.com/api/character";

function App({myFavorites, removeFav}) {
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
      removeFav(id);
    };

    function NotFound() {
      return <>Ha llegado a una página que no existe</>;
    }

    const {pathname}=useLocation();
    console.log(pathname)

    const [access,setAccess]=useState(false);
    const EMAIL = 'camilo@gmail.com';
    const PASSWORD = '123456';
    const navigate=useNavigate();

    function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
        setAccess(true);
        navigate('/home');
      }
    }
    useEffect(() => {
    !access && navigate('/');
  }, [access]);

    return (
      
      <div className='App'>
      {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
      {pathname !== "/" && <Nav onSearch={onSearch}/>}
      <Routes>
        
        <Route path='/' element={<Form login={login}/>} />
        <Route path='/About' Component={About}/>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path='/detail/:id' element={<Detail characters={characters}/>}/>
        <Route path='/favoritos' element={<Favorites onClose={onClose}/>} />
        <Route path="/*" element={NotFound} />

    
      </Routes>
      </div>  
            
    );
}
const mapStateToProps = (state) => {
  return {
  myFavorites: state.myFavorites
  }
};

const mapDispatchToProps=(dispatch)=>{
  return {
    removeFav : (id)=>dispatch(removeFav(id))
  }
};



export default connect(mapStateToProps,mapDispatchToProps)(App);
