import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './Hooks/auth';

function LoginPage() {


   
    const auth = useAuth();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  
  if (1===1){

    console.log("HOlaaaa");
    console.log(auth.user);

}

  const login = (e) => {
    e.preventDefault();
    auth.login({ username, password });
  };

  if (auth.user) {
    console.log("Debes salir");
    return <Navigate to="/profile" />
  }

  return (
    <>
      <h1>Login</h1>

      <form onSubmit={login}>
        <label>Escribe tu nombre de usuario:</label>
        <input
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button type="submit">Entrar</button>
      </form>
    </>
  );
}

export { LoginPage };