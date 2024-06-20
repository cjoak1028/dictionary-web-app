import moonIcon from "../assets/images/icon-moon.svg";

export default function ThemeToggle() {
  return (
    <label className="flex items-center cursor-pointer gap-3">
      <input type="checkbox" value="" className="sr-only peer" />
      <div className="relative w-10 h-5 bg-on-surface-variant rounded-full peer-checked:after:translate-x-5 peer-checked:bg-primary after:content-[''] after:absolute after:top-[3px] after:start-[3px] after:bg-white after:rounded-full after:h-3.5 after:w-3.5 after:transition-all"></div>
      <span>
        <img className="w-5 h-5" src={moonIcon} alt="icon depicting a moon" />
      </span>
    </label>
  );
}
