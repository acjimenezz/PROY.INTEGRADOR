export default function SearchBar({onSearch}) {
   // const onChange= (props) => {props.target.value}
   return (
      <div>
         {<input type='search' /*onChange={onChange}*/ /> }
         <button onClick={(param)=> onSearch(param.value)}>Agregar</button>
      </div>
   );
}
