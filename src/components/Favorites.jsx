import Cards from "./Cards/Cards";
import style from "./Cards/Cards.module.css";
import { connect } from "react-redux";

const Favorites=({myFavorites})=>{
    return( <>
        <h1>Esta son los personajes favoritos</h1>
        <Cards characters={myFavorites}/>
        </>)
}
const mapStateToProps = (state) => {
    return {
    myFavorites: state.myFavorites
    }
 };

export default connect(mapStateToProps,null)(Favorites);