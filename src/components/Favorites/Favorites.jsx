import Cards from "../Cards/Cards";
import { connect, useDispatch} from "react-redux";
import { filterCads, orderCards } from "../../redux/actions";
import { useState } from "react";
import style from './Fav.module.css'

const Favorites=({myFavorites, onClose})=>{

    const dispatch=useDispatch()
    const handleFilter=(event)=>{
        dispatch(filterCads(event.target.value));
    }

    const [aux, setAux] = useState(false);

    const handleOrder=(event)=>{
        dispatch(orderCards(event.target.value));
        setAux(!aux) //permite cambiar de ascendente a desdente y viceversa pero no se como funciona
    }

    return( <>
        <div className={style.filterContainer}>
            <div className={style.selectors}>
            <select onChange={handleOrder} name="order" id="">
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
            </select>
            <select  onChange={handleFilter} name="filtro" id="">
                <option value="All">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
            </select>
            </div>
         
        </div>
        {/* <h1>Esta son los personajes favoritos</h1> */}
        <Cards characters={myFavorites} onClose={onClose}/>
        {/* {myFavorites.map(({ id, name, image, gender }) => {
				return <Card id={id} name={name} image={image} gender={gender} />
			})} */}
        </>)
}
const mapStateToProps = (state) => {
    return {
    myFavorites: state.myFavorites
    }
 };

export default connect(mapStateToProps,null)(Favorites);