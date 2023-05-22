import SearchBar from "./SearchBar";
import styled from 'styled-components';
import { Link } from "react-router-dom";

const ContainerDiv=styled.div`
    background-color: rgba(38, 38, 38, 0.5);
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;


function Nav ({onSearch}){

    return(
        <ContainerDiv >
            <Link to="/About"><button>About</button></Link>
            <Link to="/home"><button>Home</button></Link>
            <SearchBar onSearch={onSearch}/>
        </ContainerDiv>
        
    )
};

export default Nav;