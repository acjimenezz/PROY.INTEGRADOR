
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

export default function Card(props) {
    
   return (
      <div className={style.div}>
         {/* <button className={style.Button} onClick={()=>(props.onClose())}>X</button> */}
         <button className={style.Button} onClick={()=>props.onClose(props.id)}>X</button> 
         <Link to={`/detail/${props.id}`}><h1 className={style.prop}>Name:{props.name}</h1></Link>
         <h2 className={style.prop}>Status:{props.status}</h2>
         <h2 className={style.prop}>Species:{props.species}</h2>
         <h2 className={style.prop}>Gender:{props.gender}</h2>
         <h2 className={style.prop}>Origin:{props.origin}</h2>
         <img className={style.image} src={props.image} alt='Rick'/> 
      </div>
   );
}