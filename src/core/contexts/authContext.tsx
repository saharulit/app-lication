import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';
import { User } from 'src/core/entities/user/user';
import { useLoginUserMutation, useRegisterUserMutation } from '../api/authApi';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) => Promise<void>;
  logout: () => void;
}

const SESSION_STORAGE_KEY = 'user';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = sessionStorage.getItem(SESSION_STORAGE_KEY);
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [loginUser] = useLoginUserMutation();
  const [registerUser] = useRegisterUserMutation();

  useEffect(() => {
    if (user) {
      sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(user));
    } else {
      sessionStorage.removeItem(SESSION_STORAGE_KEY);
    }
  }, [user]);

  const login = async (email: string, password: string) => {
    try {
      const response = await loginUser({ email, password }).unwrap();
      setUser(response);
    } catch (error) {
      console.error('Login failed:', error);
      setUser(null);
    }
  };

  const register = async (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) => {
    try {
      const response = await registerUser({
        firstName,
        lastName,
        email,
        password,
      }).unwrap();
      setUser(response);
    } catch (error) {
      console.error('Registration failed:', error);
      setUser(null);
    }
  };

  const logout = () => {
    // You can clear cookies or handle other cleanup tasks here
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
