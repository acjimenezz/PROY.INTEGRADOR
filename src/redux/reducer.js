import { ADD_FAV, REMOVE_FAV,REMOVE_FAV_BUTTON_X, FILTER, ORDER} from './actions';

const initialState = {
    myFavorites:[],
    allCharacters:[]
}

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator. 
// ¿Qué tiene que hacer el reducer con el contador de cada caso?
export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
        // completa para este caso
            return { ...state, 
                myFavorites:[...state.allCharacters, action.payload],
                allCharacters:[...state.allCharacters, action.payload]};

        case REMOVE_FAV:
        // Fill para este otro
            return { ...state, myFavorites: state.myFavorites.filter((char)=> parseInt(char.id) !== parseInt(action.payload))};

        case REMOVE_FAV_BUTTON_X:
            return { ...state, myFavorites: state.myFavorites.filter((char)=> parseInt(char.id) !== parseInt(action.payload))};
        
        case FILTER:
            const allCharacterFavFiltered=state.allCharacters.filter((char)=> char.gender === action.payload)
            return action.payload === 'All' ? 
                {...state, myFavorites:state.allCharacters} : {...state, myFavorites:allCharacterFavFiltered}
        
        case ORDER:
            return {...state,
                myFavorites: action.payload === 'Ascendente' ? 
                state.allCharacters.sort((a, b) => a.id - b.id): 
                state.allCharacters.sort((a, b) => b.id - a.id)}

        default:
            return state;
    }
};