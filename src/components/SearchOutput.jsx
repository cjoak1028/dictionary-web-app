import playIcon from "../assets/images/icon-play.svg";

export default function SearchOutput() {
  return (
    <>
      <div className="flex flex-row justify-between items-center mb-8">
        <span>
          <h1 className="text-2xl font-bold mb-2">keyboard</h1>
          <h3 className="text-lg font-light text-purple-500">/ˈkiːbɔːd/</h3>
        </span>
        <span>
          <button>
            <img className="w-12 h-12" src={playIcon} alt="" />
          </button>
        </span>
      </div>
    </>
  );
}
