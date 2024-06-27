import { useCookies } from 'react-cookie';
import Button from '../../components/Button/Button';

export default function Login() {
  const [, setCookie] = useCookies(['user']);
  const login = () => {
    setCookie('user', true, { path: '/' });
  };

  return (
    <>
      <h1>Login</h1>
      <Button onClick={login}>Login</Button>
    </>
  );
}
