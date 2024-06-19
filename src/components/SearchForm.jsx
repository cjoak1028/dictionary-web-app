import { useState } from "react";
import searchIcon from "../assets/images/icon-search.svg";

export default function SearchForm() {
  const [inputFocus, setInputFocus] = useState(false);

  function handleInputFocus() {
    setInputFocus(true);
  }

  function handleInputBlur() {
    setInputFocus(false);
  }

  return (
    <form
      className={`h-12 rounded-2xl bg-surface-container px-6 flex flex-row items-center gap-3 mb-6 ${
        inputFocus ? "outline outline-1 outline-primary" : ""
      }`}
    >
      <input
        className="flex-1 w-full bg-surface-container text-base font-bold focus:outline-0 caret-primary"
        type="search"
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
    </form>
  );
}
