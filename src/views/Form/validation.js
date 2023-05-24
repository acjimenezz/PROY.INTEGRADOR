

export default function validation ({email,password}){
   
    let errors={}
    let regexEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let regexIncludeNumber= /\d/ ;

    if(!regexEmail.test(email)){
        errors.email="Email inválido";
    };
    if(email.length > 35) {
        errors.email="no mas de 35 caracteres"
    };
    if (email.length === 0){
        errors.email="debe colocar un email"
    };

    if (!regexIncludeNumber.test(password)){
        errors.password="debe contener almenos 1 numero"
    };

    if (password.length < 6 || password.length > 10){
        errors.password="debe contener entre 6 y 10 caracteres"
    };
    return errors;
}

