import { useCookies } from 'react-cookie';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

function MainLayout({ children }): JSX.Element {
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
