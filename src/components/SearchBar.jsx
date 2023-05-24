import styled from 'styled-components';
import { useState } from 'react';

const Div=styled.span`
   height:50px;
   margin-top: 10px;
   margin-right: 10px;
`;
const Button=styled.button`
   background-color: #f3f021;
   color: #000000;
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
`;
const Input=styled.input`
   background-color: #9ef7f2;
   padding:5px;
   border-radius: 8px;
`;


export default function SearchBar({onSearch}) {
   // const onChange= (props) => {props.target.value}
   const [id, setId] = useState("");
  const handleChange = (event) => {
       setId(event.target.value);
  };
   return (
      <Div>
         {<Input type='search' onChange={handleChange} /> }
         <Button onClick={()=> onSearch(id)}>Agregar</Button>
      </Div>
   );
}
