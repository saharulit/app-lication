import { useCookies } from 'react-cookie';
import { ReactNode } from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps): JSX.Element {
  const [, setCookie] = useCookies(['user']);
  const handleLogOut = () => {
    setCookie('user', false, { path: '/' });
  };

  return (
    <>
      <NavigationBar onLogOut={handleLogOut} />
      <div className="p-10">{children}</div>
    </>
  );
}

export default MainLayout;