// asdaada2342.3@gmail.com
const isEmailValid = email => {
    const regex = new RegExp(/^[A-Za-z0-9+_.-]+@(.+)$/);
    return regex.test(email);
  };
  
  // Name or surname can just use alphabet letters
  const isNameOrSurnameValid = username => {
    const regex = new RegExp(/^[A-Z]+$/i);
    return regex.test(username);
  };
  
  // Password must contain eight characters, with at least one capital letter, number and special sign
  const isPasswordValid = password => {
    const regex = new RegExp(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    );
    return regex.test(password);
  };
  
  export const validateLogin = data => {
    const {email, password} = data;
  
    if (!isEmailValid(email)) {
      console.log(email);
      console.log('EMAIL INVALIDO');
      return false;
    }
  
    if (!isPasswordValid(password)) {
      console.log('CONTRASEÑA INVALIDA');
      return false;
    }
  
    // Log in user
    console.log('LOGIN OK');
  };
  
  export const validateRegister = data => {
    const {name, surname, email, password} = data;
  
    if (!isEmailValid(email)) {
      return false;
    }
  
    if (!isPasswordValid(password)) {
      return false;
    }
  
    if (!isNameOrSurnameValid(name)) {
      return false;
    }
  
    if (!isNameOrSurnameValid(surname)) {
      return false;
    }
  
    return true;
  };