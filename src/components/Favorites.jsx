import Cards from "./Cards/Cards";
import { connect } from "react-redux";

const Favorites=({myFavorites, onClose})=>{
    
    return( <>
        <h1>Esta son los personajes favoritos</h1>
        <Cards characters={myFavorites} onClose={onClose}/>
        </>)
}
const mapStateToProps = (state) => {
    return {
    myFavorites: state.myFavorites
    }
 };

export default connect(mapStateToProps,null)(Favorites);