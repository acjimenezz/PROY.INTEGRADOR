
// export default function Card({name,status,species,gender,origin,image,onClose}) {
//    console.log(onClose);
//    return (
//       <div>
//          <button onClick={()=>{onClose()}}>X</button>;
//          <h2>name={name}</h2>;
//          <h2>status={status}</h2>;
//          <h2>species={species}</h2>;
//          <h2>gender={gender}</h2>;
//          <h2>origin={origin}</h2>;
//          <img src={image} alt='Rick'/> ;
//       </div>
//    );
// }


import style from './Card.module.css'
import { Link } from 'react-router-dom';
import { addFav,removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState,useEffect } from 'react';

function Card({id, name, status, species, gender, origin, image,onClose, myFavorites, addFav,removeFav}) {

   const [isFav, setIsFav]=useState(false);

   const handleFavorite=()=>{
      if (isFav === true){
         removeFav(id);
         setIsFav(false);
      };
      if (isFav === false){
         setIsFav(true);
         addFav({id,name,status,species,gender,origin,image,onClose})
      }
   }

   useEffect(() => {
      console.log(myFavorites)
      myFavorites.forEach((fav) => {
      console.log(fav.id, id)
         if (fav.id === id) {
         console.log("si")
            setIsFav(true);
         }
      });
   }, [myFavorites]);

      return (
         <div className={style.div}>
            <div style={{display: "flex", justifyContent: "space-between"}}>
               <div className={style.buttoncontainer}>
               {
                  isFav ? (
                     <button className={style.buttonFav} onClick={handleFavorite}>❤️</button>
                  ) : (
                     <button className={style.buttonFav} onClick={handleFavorite}>🤍</button>
                  )
               }
               </div>
               <div className={style.buttoncontainer}>
                  <button className={style.Button} onClick={()=>onClose(id)}>X</button> 
               </div>
         </div>

         <Link to={`/detail/${id}`}><h1 className={style.prop}>Name:{name}</h1></Link>
         <h2 className={style.prop}>Status:{status}</h2>
         <h2 className={style.prop}>Species:{species}</h2>
         <h2 className={style.prop}>Gender:{gender}</h2>
         <h2 className={style.prop}>Origin:{origin}</h2>
         <img className={style.image} src={image} alt='Rick'/> 
      </div>
   );
};

const mapStateToProps = (state) => {
   return {
   myFavorites: state.myFavorites
   }
};

const mapDispatchToProps=(dispatch)=>{
   return {
      addFav : (character)=>dispatch(addFav(character)),
      removeFav : (id)=>dispatch(removeFav(id))
   }
};



export default connect(mapStateToProps,mapDispatchToProps)(Card);