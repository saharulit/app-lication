import Logo from "../../assets/logo-full-white.svg"

function NavigationBar() {
  return (
    <div className="w-full h-16 app-bg-deep-dark-blue">
      <img className="pl-10" src={Logo} alt="logo"/>
    </div>
  )
}

export default NavigationBar;