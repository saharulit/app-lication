import { Button } from '@mui/material';
import Logo from '../../assets/logo-full-white.svg';

interface NavigationBarProps {
  onLogOut: () => void;
}

function NavigationBar({ onLogOut }: NavigationBarProps) {
  return (
    <div className="w-full h-16 app-bg-deep-dark-blue">
      <div className="flex flex-row items-center justify-between px-10">
        <img src={Logo} alt="logo" className="h-8" />
        <Button onClick={onLogOut}>Logout</Button>
      </div>
    </div>
  );
}

export default NavigationBar;
