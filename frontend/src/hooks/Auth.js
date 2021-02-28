import { createContext, useState, useCallback, useContext } from 'react';
import api from '../services/api'

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [providerData, setProviderData] = useState(() => {
        const token = localStorage.getItem('@RealTimeChat:token')
        const user = localStorage.getItem('@RealTimeChat:user')
        if (token && user) {
            return { token, user: JSON.parse(user) };
        } else return {} ;
    });

    const [isRegisterPage, setIsRegisterPage] = useState(false);

    const [isAuthenticated, setIsAuthenticated] = useState(
      (localStorage.getItem('@RealTimeChat:token') !== null) ? true : false
    );

    const login = useCallback(async (data) => {
        const response = await api.post('auth/login', data);

        const { token, user } = response.data;

        localStorage.setItem('@RealTimeChat:token', token)
        localStorage.setItem('@RealTimeChat:user', JSON.stringify(user))

        setProviderData({ token, user });
        setIsAuthenticated(true);
    }, []);

    const register = useCallback(async (data) => {
      const response = await api.post('auth/register', data);

      const { token, user } = response.data;

      localStorage.setItem('@RealTimeChat:token', token)
      localStorage.setItem('@RealTimeChat:user', JSON.stringify(user))

      setProviderData({ token, user });
      setIsAuthenticated(true);
  }, []);

    const logout = useCallback(() => {
        localStorage.removeItem('@RealTimeChat:token')
        localStorage.removeItem('@RealTimeChat:user')

        setProviderData({})
        setIsAuthenticated(false);
    }, [])


  return (
    <AuthContext.Provider value={{ 
      user: providerData.user, 
      login, 
      logout, 
      register, 
      isRegisterPage, 
      setIsRegisterPage,
      isAuthenticated,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
      console.log('useAuth must be used within a AuthProvider')
    throw new Error('useAuth must be used within a AuthProvider')
  }

  return context;
}

export { AuthProvider, useAuth };

