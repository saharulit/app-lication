import { ReactNode } from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import { useAuth } from '../../core/contexts/authContext';
import { useNavigate } from 'react-router-dom';

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps): JSX.Element {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <>
      {user && <NavigationBar onLogOut={handleLogOut} />}
      <div className={user? "p-10": ""} >{children}</div>
    </>
  );
}

export default MainLayout;
