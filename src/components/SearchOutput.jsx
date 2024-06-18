import playIcon from "../assets/images/icon-play.svg";
import Definition from "./Definition.jsx";
import newWindowIcon from "../assets/images/icon-new-window.svg";

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
      <Definition />
      <div className="text-sm">
        <div className="h-px bg-gray-200 mb-6"></div>
        <h5 className="mb-2 text-zinc-500 underline decoration-wavy">Source</h5>
        <a
          className="flex flex-row items-center gap-2"
          href="https://en.wiktionary.org/wiki/keyboard"
        >
          <span className="break-all">
            https://en.wiktionary.org/wiki/keyboard
          </span>
          <img
            className="w-3 h-3"
            src={newWindowIcon}
            alt="icon depicting new window"
          />
        </a>
      </div>
    </>
  );
}
