import usersListExample from './UsersListExample';

async function loginUser(username, password) {

  // Buscar el usuario por correo electrónico en la lista de usuarios
  const user = usersListExample.find(user => user.username === username);

  // Comprobar si se encontró el usuario y la contraseña es correcta
  if (user && user.password === password) {
    // Si los datos de inicio de sesión son correctos, devolver el usuario
    return user;
  } else {
    // Si las credenciales son incorrectas, lanzar una excepción
    throw new Error('Email o contraseña incorrectos');
  }
}

export { loginUser };
