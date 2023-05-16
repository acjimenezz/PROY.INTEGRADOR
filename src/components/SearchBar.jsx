import styled from 'styled-components';

const Div=styled.span`
   height:50px;
`;
const Button=styled.button`
   background-color: black;
   color: wheat;
`;
const Input=styled.input`
   background-color: #9ef7f2;
`;

export default function SearchBar({onSearch}) {
   // const onChange= (props) => {props.target.value}
   return (
      <Div>
         {<Input type='search' /*onChange={onChange}*/ /> }
         <Button onClick={(param)=> onSearch(param.value)}>Agregar</Button>
      </Div>
   );
}
