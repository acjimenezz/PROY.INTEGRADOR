import SearchBar from "./SearchBar";
import styled from 'styled-components';

const ContainerDiv=styled.div`
    background-color: rgba(38, 38, 38, 0.5);
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;


function Nav ({onSearch}){

    return(
        <ContainerDiv >
            <SearchBar onSearch={onSearch}/>
        </ContainerDiv>
        
    )
};

export default Nav;