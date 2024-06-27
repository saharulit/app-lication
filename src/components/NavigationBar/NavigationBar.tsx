import { Button } from '@mui/material';
import Logo from '../../assets/logo-full-white.svg';

interface NavigationBarProps {
  onLogOut: () => void; // Specify the type for onLogOut prop
}

function NavigationBar({ onLogOut }: NavigationBarProps) {
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
