export default function PlayButton({ onClick }) {
  return (
    <button onClick={onClick} className="group">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 md:w-16 md:h-16"
        viewBox="0 0 75 75"
      >
        <g className="fill-primary" fillRule="evenodd">
          <circle
            cx="37.5"
            cy="37.5"
            r="37.5"
            className="opacity-25 group-hover:opacity-100"
            opacity=".25"
          />
          <path d="M29 27v21l21-10.5z" className="group-hover:fill-white" />
        </g>
      </svg>
    </button>
  );
}
