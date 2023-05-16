
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

// import styled from 'styled-components'

// const ButtonStyle=styled.button`
// box-sizing: content-box;
// float: right;
// border: 1px solid #e00404;
// -webkit-border-radius: 3px;
// border-radius: 3px;
// font: normal 16px/normal "Times New Roman", Times, serif;
// color: rgba(0,0,0,0.9);
// -o-text-overflow: clip;
// text-overflow: clip;
// background: #d80202;
// `;

import style from './Card.module.css'

export default function Card(props) {
    console.log(props.origin);
   return (
      <div className={style.div}>
         <button className={style.Button} onClick={()=>(props.onClose())}>X</button>
         <h1 className={style.prop}>Name:{props.name}</h1>
         <h2 className={style.prop}>Status:{props.status}</h2>
         <h2 className={style.prop}>Species:{props.species}</h2>
         <h2 className={style.prop}>Gender:{props.gender}</h2>
         <h2 className={style.prop}>Origin:{props.origin}</h2>
         <img className={style.image} src={props.image} alt='Rick'/> 
      </div>
   );
}