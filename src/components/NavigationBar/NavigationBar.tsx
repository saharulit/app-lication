import Logo from '../../assets/logo-full-white.svg';
import Button from '../Button/Button';

interface NavigationBarProps {
  onLogOut: () => void;
}

function NavigationBar({ onLogOut }: NavigationBarProps) {
  return (
    <div className="w-full h-16 app-bg-deep-dark-blue">
      <div className="flex flex-row px-10 py-3 items-center">
        <img src={Logo} alt="logo" className="w-24" />
        <div className="grow" />
        <Button className="custom-button" onClick={onLogOut}>
          Logout
        </Button>
      </div>
    </div>
  );
}

export default NavigationBar;
