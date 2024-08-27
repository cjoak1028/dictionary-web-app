import { useState } from "react";
import searchIcon from "../assets/images/icon-search.svg";

export default function SearchInput({ initialWord, onWordSearch }) {
  const [inputFocus, setInputFocus] = useState(false);
  const [inputVal, setInputVal] = useState(initialWord);
  const [isEmpty, setIsEmpty] = useState(false);

  function handleInputFocus() {
    setInputFocus(true);
  }

  function handleInputBlur() {
    setInputFocus(false);
  }

  function handleInputChange(e) {
    setIsEmpty(false);
    setInputVal(e.target.value);
  }

  function handleSearchClick() {
    const processedWord = inputVal.trim();
    if (!processedWord) {
      setIsEmpty(true);
    }
    onWordSearch(processedWord);
  }

  return (
    <section className="mb-6">
      <div
        className={`h-12 rounded-2xl bg-surface-container dark:bg-surface-container-dark px-6 flex flex-row items-center gap-3 ${
          inputFocus && "outline outline-1 outline-primary"
        } ${isEmpty && "outline outline-1 outline-error"}`}
      >
        <input
          className="flex-1 w-full bg-surface-container dark:bg-surface-container-dark text-base font-bold focus:outline-0 caret-primary placeholder:text-on-surface/30"
          type="text"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          value={inputVal}
          onChange={handleInputChange}
          placeholder={"Search for any word..."}
        />
        <button onClick={handleSearchClick}>
          <img
            className="w-4 h-4"
            src={searchIcon}
            alt="icon depicting a magnifying glass"
          />
        </button>
      </div>
      {isEmpty && (
        <p className="mt-2 text-error">Whoops, can&apos;t be empty...</p>
      )}
    </section>
  );
}
