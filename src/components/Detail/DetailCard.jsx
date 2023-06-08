import { Link } from "react-router-dom";
import style from './DetailCard.module.css'

export default function DetailCard(props) {
      return (
         <div className={style.DivGrande}>
         <Link to={`/home`}><button className={style.Button}>Atrás</button></Link>
         <div> 
            <h1 >Name:{props.name}</h1>
            <h2 >Status:{props.status}</h2>
            <h2 >Species:{props.species}</h2>
            <h2>Gender:{props.gender}</h2>
         <h2 >Origin:{props?.origin}</h2>
         </div>
         <img  src={props.image} alt='Rick'/> 
         </div>
      );
}

