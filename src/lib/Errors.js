const Errors = (error) => {
  let messageEnd = '';
  switch (error) {
    case 'Password should be at least 6 characters':
      messageEnd = 'Tu contraseña debe tener más de 6 caracteres';
      break;
    case 'The email address is badly formatted.':
      messageEnd = 'El Formato del correo esta mal';
      break;
    case 'The email address is already in use by another account.':
      messageEnd = 'El correo ya existe';
      break;
    default:
      messageEnd = 'Error';
  }
  return messageEnd;
};
export default Errors;
