import { useDispatch, useSelector } from 'react-redux';
import { createContext, useContext, useEffect } from 'react';
import { checkToken } from '../store/thunks/authThunk';
import { getCategories } from '../store/thunks/urunThunk';
import { AuthService } from '../utils/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.client.user);

  useEffect(() => {
    dispatch(checkToken());
    dispatch(getCategories());
  }, [dispatch]);

  const authContextValue = {
    user,
    isAuthenticated: AuthService.isAuthenticated(),
    isLoading: false,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
