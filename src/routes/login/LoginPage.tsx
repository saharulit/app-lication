import LoginForm from './LoginForm';
import BigLogo from '../../assets/logo-full-white.svg';
import Register from './Register';
import { useLocation } from 'react-router-dom';

const LoginPage = () => {
  const location = useLocation();
  const isRegister = location.pathname === '/register';

  return (
    <div className="flex flex-col h-screen">
      <div className="flex md:flex-row flex-col flex-1 overflow-hidden">
        {/* Left side */}
        <div className="flex-shrink md:basis-2/5 basis-1/5 flex items-center justify-center md:justify-center bg-[#181D31] h-full md:rounded-r-[36px] rounded-b-[36px]">
          <div className="flex flex-col items-center justify-center">
            <img className="md:w-60 w-40" src={BigLogo}></img>
            <p className="app-color-white text-center kew-x-3">
              {' '}
              Stay on top of your job hunt <br /> with all your applications in
              one place!
            </p>
          </div>
        </div>

        {/* Right side */}
        <div className="px-4 md:basis-3/5 basis-4/5 flex overflow-auto align-middle flex-auto">
          <div className="w-96 m-auto h-[620px] ">
            {/* Right side content goes here */}
            {isRegister ? <Register /> : <LoginForm />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
