import SearchBar from "./SearchBar";
import styled from 'styled-components';
import { Link } from "react-router-dom";

const ContainerDiv=styled.div`
    background-color: rgba(38, 38, 38, 0.5);
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 1300px;
`;

const Button=styled.button`
    background-color: #ec27cc ;
    color: #ffffff;
    border-radius: 10px;
    padding: 5px;
    font-family: Verdana;
    font-weight: bold;
    padding-left:15px;
    padding-right:15px;

    &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`


function Nav ({onSearch}){

    return(
        <ContainerDiv >
            <Link to="/About"><Button>About</Button></Link>
            <Link to="/home"><Button>Home</Button></Link>
            <SearchBar onSearch={onSearch}/>
        </ContainerDiv>
        
    )
};

export default Nav;