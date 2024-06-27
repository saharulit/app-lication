import { useCookies } from 'react-cookie';
import { ReactNode } from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import { useLocation } from 'react-router-dom';

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps): JSX.Element {
  const [, setCookie] = useCookies(['user']);
  const handleLogOut = () => {
    setCookie('user', false, { path: '/' });
  };
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      <NavigationBar onLogOut={handleLogOut} />
      <div>pathName- {pathname}</div>

      <div className="p-10">{children}</div>
    </>
  );
}

export default MainLayout;
