import { useState } from "react";
import style from './Form.module.css'
import validation from "./validation";


const Form =({login})=>{

    const [userData,setUserData]=useState({
        email:"",
        password:"",
    })

    // const handleChange=(event)=>{
    //     if(event.target.name === "email"){
    //         setUserData({...userData, email:event.target.value})
    //     }
    //     if(event.target.name === "password"){
    //         setUserData({...userData, password:event.target.value})
    //     }
    // }

    const handleChange=(event)=>{
        const property=event.target.name;
        const value=event.target.value;

        setErrors(validation({...userData, [property] : value}));
        setUserData({...userData, [property] : value});
    }

    const submitHandler=(event)=>{
        event.preventDefault();
        if(Object.keys(errors).length === 0){
            login(userData)
            console.log(Object.keys(errors).length);
        };
    }
    const [errors,setErrors]=useState({})

    
    return(
        <form className={style.container} onSubmit={submitHandler}>
            <img className={style.image} src="https://fondosmil.com/fondo/27336.jpg" alt="Rick and Morty" />
            <div className={style.div}>
                <label className={style.font} htmlFor="email">E-mail</label>
                <input type="text" name="email"
                value={userData.email}  onChange={handleChange}
                className={errors.email ? style.error : style.success }/>
                <span>{errors.email}</span>
            </div>
            <div className={style.div}>
                <label className={style.font} htmlFor="password">Password</label>
                <input  type="text" name="password" 
                value={userData.password} onChange={handleChange}
                className={errors.password  ? style.error : style.success }/>
                <span>{errors.password}</span>
            </div>
            <button className={style.button} type="submit">Login</button>

        </form>
    )
}
    export default Form;