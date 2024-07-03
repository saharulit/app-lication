import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';
import { User } from 'src/core/entities/user/user';
import { authService } from '../services';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
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

  useEffect(() => {
    if (user) {
      sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(user));
    } else {
      sessionStorage.removeItem(SESSION_STORAGE_KEY);
    }
  }, [user]);

  const login = async (email: string, password: string) => {
    const response = await authService.login(email, password);
    if (response.success) {
      setUser(response.user);
    } else {
      setUser(null);
    }
  };

  const logout = async () => {
    await authService.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
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
