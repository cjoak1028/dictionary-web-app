import appLogo from "../assets/images/logo.svg";
import FontPicker from "./FontPicker.jsx";
import ThemeSwitch from "./ThemeSwitch.jsx";

export default function Header() {
  return (
    <header className="h-8 md:h-8 mb-6 md:mb-12 flex flex-row items-center justify-between">
      <img className="h-full" src={appLogo} alt="logo depicting a dictionary" />
      <div className="flex flex-row">
        <FontPicker />
        <div className="self-stretch w-px mx-4 bg-outline"></div>
        <ThemeSwitch />
      </div>
    </header>
  );
}
