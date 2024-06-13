import appLogo from "../assets/images/logo.svg";
import FontPicker from "./FontPicker";
import Divider from "./Divider";

export default function Header() {
  return (
    <header className="h-8 my-6 flex flex-row items-center justify-between">
      <img src={appLogo} alt="logo depicting a dictionary" />
      <div className="flex flex-row">
        <FontPicker />
        <Divider />
      </div>
    </header>
  );
}
