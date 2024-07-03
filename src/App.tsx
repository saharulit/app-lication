import './App.css';
import { AuthProvider } from './core/contexts/authContext';
import Root from './routes/root/Root';

function App() {
  return (
    <AuthProvider>
      <Root />
    </AuthProvider>
  );
}

export default App;
