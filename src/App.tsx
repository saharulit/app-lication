import { Provider } from 'react-redux';
import './App.css';
import { AuthProvider } from './core/contexts/authContext';
import { store } from './core/services/store';
import Root from './routes/root/Root';

function App() {
  return (
    <AuthProvider>
      <Provider store={store}>
        <Root />
      </Provider>
    </AuthProvider>
  );
}

export default App;
