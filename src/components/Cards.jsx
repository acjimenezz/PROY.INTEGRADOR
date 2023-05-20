import Card from './Card';

// export default function Cards({characters}) {
//    console.log(characters);
//    return <div>
//       {characters.map((e)=>(
//       <Card id={e.id}
//       name={e.name} 
//       status={e.status}
//       species={e.species}
//       gender={e.gender}
//       origin={e.origin.name}
//       image={e.image}
//       onClose={() => window.alert('Emulamos que se cierra la card')}/>))}

//       {/* {for(let i=0;i<props.characters.length;i++){ }; */}

     
      
//    </div>;
// }

import style from "./Cards.module.css";

///HACIENDO DESTRUCTORING
export default function Cards({characters, onClose}) {
   // console.log(characters);
   return <div className={style.DivCards}>
      {characters.map(({id,name,status,species,gender,origin,image,/*onClose*/})=>(
      <Card id={id}
      name={name} 
      status={status}
      species={species}
      gender={gender}
      origin={origin.name}
      image={image}
      onClose={onClose}
      // onClose={() => window.alert('Emulamos que se cierra la card')}  
      
      />))}

      {/* {for(let i=0;i<props.characters.length;i++){ }; */}

   </div>;
}

