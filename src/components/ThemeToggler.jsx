import moonIcon from "../assets/images/icon-moon.svg";

export default function ThemeToggler() {
  return (
    <div className="flex flex-row gap-3 items-center">
      <div className="rounded-xl bg-on-surface-variant w-10 h-5 flex flex-row items-center px-1">
        <div className="rounded-full w-3.5 h-3.5 bg-surface"></div>
      </div>
      <span>
        <img className="w-5 h-5" src={moonIcon} alt="icon depicting a moon" />
      </span>
    </div>
  );
}
