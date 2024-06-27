import { CookiesProvider, useCookies } from 'react-cookie';

import './App.css';
import Login from './routes/login/Login';
import Root from './routes/root/Root';

function App() {
  const [cookies] = useCookies(['user']); //TODO: Replace with user srote
  console.log('cookies.user', cookies.user);
  return (
    <CookiesProvider>
      <div>{cookies.user ? <Root /> : <Login />}</div>
    </CookiesProvider>
  );
}

export default App;
