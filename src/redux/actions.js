export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_ADD';
export const REMOVE_FAV_BUTTON_X = 'REMOVE_FAV_BUTTON_X';
export const FILTER='FILTER';
export const ORDER='ORDER';

// Nuestras actions (action creators) devolverán un paquete de actions que nuestro reducer recibirá. 
// ¿Cómo es el paquete de acción? Tengan en cuenta que el creador de la acción no es en absoluto responsable 
// de manejar ninguna de las lógicas actuales de actualización del store central de Redux.
// Eso se lo deja al reducer(s).

export const addFav = (character) => {
  // Completa la funcion
  return {type: ADD_FAV,
            payload:character};

};

export const removeFav = (id) => {
  // Completa la funcion
  return {type: REMOVE_FAV,
            payload:id}

};

export const removeFavButtonX = (id) => {
    // Completa la funcion
    return {type: REMOVE_FAV_BUTTON_X,
            payload:id}
  };

  export const filterCads=(gender)=>{
    return{
      type:FILTER,
      payload:gender
    }
  }

  export const orderCards=(order)=>{
    return{
      type: ORDER,
      payload: order
    }
  }
