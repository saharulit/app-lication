import { Provider } from 'react-redux';
import './App.css';
import { AuthProvider } from './core/contexts/authContext';
import { store } from './core/services/store';
import Root from './routes/root/Root';

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Root />
      </AuthProvider>
    </Provider>
  );
}

export default App;
