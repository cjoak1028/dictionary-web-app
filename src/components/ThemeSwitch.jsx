export default function ThemeSwitch() {
  function handleToggle() {
    document.body.classList.toggle("dark");
  }

  return (
    <label className="flex items-center cursor-pointer gap-3 group">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onChange={handleToggle}
      />
      <div className="relative w-10 h-5 bg-on-surface-variant rounded-full peer-checked:after:translate-x-5 peer-checked:bg-primary after:content-[''] after:absolute after:top-[3px] after:start-[3px] after:bg-white after:rounded-full after:h-3.5 after:w-3.5 after:transition-all group-hover:bg-primary"></div>
      <svg
        width="20"
        height="20"
        viewBox="0 0 22 22"
        className="stroke-current text-on-surface-variant peer-checked:text-primary group-hover:text-primary"
      >
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
        />
      </svg>
    </label>
  );
}
