import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
// import Card from '../components/Card';
import DetailCard from '../components/Detail/DetailCard';


const Detail =()=>{
    const {id}=useParams();
    const [character,setCharacter]=useState({})
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(
        <div>
           {/* <h1>soy el detail de la card {id}</h1>  */}
          { character ? (
           <DetailCard id={id}
            name={character.name} 
            status={character.status}
            species={character.species}
            gender={character.gender}
            // origin={character.origin.name}
            image={character.image}
      
    />) : (<h1> cargando </h1>)}
        </div>

    )
}

export default Detail;