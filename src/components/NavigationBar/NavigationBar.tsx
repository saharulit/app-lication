import { Button } from '@mui/material';
import Logo from '../../assets/logo-full-white.svg';

function NavigationBar({ onLogOut }) {
  return (
    <div className="w-full h-16 app-bg-deep-dark-blue">
      <div className="flex flex-row">
        <img className="pl-10" src={Logo} alt="logo" />
        <Button onClick={onLogOut}>Logout</Button>
      </div>
    </div>
  );
}

export default NavigationBar;
