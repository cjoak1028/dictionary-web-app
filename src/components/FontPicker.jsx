import { useContext, useState, useEffect, useRef } from "react";
import { FontContext } from "../App.jsx";

export default function FontPicker() {
  const [showMenu, setShowMenu] = useState(false);
  const fontState = useContext(FontContext);
  const fontPickerRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (!fontPickerRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
  }, []);

  function handleMenuButtonClick() {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  }

  function handleFontChange(font) {
    fontState.setFont(font);
    setShowMenu(false);
  }

  function renderButtonTitle(font) {
    switch (font) {
      case "sans":
        return "Sans Serif";
      case "serif":
        return "Serif";
      default:
        return "Mono";
    }
  }

  return (
    <div className="relative" ref={fontPickerRef}>
      <button
        className="flex flex-row items-center gap-4"
        onClick={handleMenuButtonClick}
      >
        <span className="text-sm font-bold">
          {renderButtonTitle(fontState.font)}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="8"
          viewBox="0 0 14 8"
        >
          <path
            fill="none"
            stroke="#A445ED"
            strokeWidth="1.5"
            d="m1 1 6 6 6-6"
          />
        </svg>
      </button>
      {showMenu && (
        <div className="absolute bg-surface dark:bg-surface-container-dark right-0 top-9 p-6 w-36 rounded-2xl shadow-[0_5px_30px_0_rgba(0,0,0,0.1)] dark:shadow-[0_5px_30px_0_rgba(164,69,237,1)] text-sm font-bold">
          <ul className="flex flex-col gap-4">
            <li>
              <button
                className="font-sans hover:text-primary"
                onClick={() => handleFontChange("sans")}
              >
                Sans Serif
              </button>
            </li>
            <li>
              <button
                className="font-serif hover:text-primary"
                onClick={() => handleFontChange("serif")}
              >
                Serif
              </button>
            </li>
            <li>
              <button
                className="font-mono hover:text-primary"
                onClick={() => handleFontChange("mono")}
              >
                Mono
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
