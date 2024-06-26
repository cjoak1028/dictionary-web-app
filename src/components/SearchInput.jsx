import { useState } from "react";
import searchIcon from "../assets/images/icon-search.svg";

export default function SearchInput() {
  const [inputFocus, setInputFocus] = useState(false);

  function handleInputFocus() {
    setInputFocus(true);
  }

  function handleInputBlur() {
    setInputFocus(false);
  }

  return (
    <section
      className={`h-12 rounded-2xl bg-surface-container dark:bg-surface-container-dark px-6 flex flex-row items-center gap-3 mb-6 ${
        inputFocus ? "outline outline-1 outline-primary" : null
      }`}
    >
      <input
        className="flex-1 w-full bg-surface-container dark:bg-surface-container-dark text-base font-bold focus:outline-0 caret-primary"
        type="text"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      <span>
        <img
          className="w-4 h-4"
          src={searchIcon}
          alt="icon depicting a magnifying glass"
        />
      </span>
    </section>
  );
}
