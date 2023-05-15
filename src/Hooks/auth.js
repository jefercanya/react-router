import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import usersListExample from '../utils/UsersListExample';
import { loginUser } from '../utils/services';

const adminList = ['usuario1', 'usuario2', 'usuario3'];

const AuthContext = React.createContext();

function AuthProvider({ children }) {

  console.log(usersListExample);

  const navigate = useNavigate();
  const [user, setUser] = React.useState(null);

  const isAdmin2 = true;

  const login = async ({ username,password }) => {
    //result fecth API async ()
    try {
      const user = await loginUser(username, password);
      setUser(user, isAdmin2);
      navigate('/profile');
    } catch (error) {
      alert(error.message);
    }
    //loginUser(username, password) 

    const isAdmin = adminList.find(admin => admin === username);
    //setUser({ username, isAdmin });
    //navigate('/profile');
  };

  
  const logout = () => {
    setUser(null);
    navigate('/');
  };
  

  const auth = { user, login, logout };


  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
}


function useAuth() {
  const auth = React.useContext(AuthContext);
  return auth;
}


function AuthRoute(props) {
    const auth = useAuth();
  
    if (!auth.user) {
      return <Navigate to="/login" />;
    }
    return props.children;
  }


export {
  AuthProvider,
  AuthRoute,
  useAuth,
};