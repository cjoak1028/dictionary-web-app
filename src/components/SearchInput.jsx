import { useState } from "react";
import searchIcon from "../assets/images/icon-search.svg";

export default function SearchInput({ initialWord, onWordSearch }) {
  const [inputFocus, setInputFocus] = useState(false);
  const [inputVal, setInputVal] = useState(initialWord);

  function handleInputFocus() {
    setInputFocus(true);
  }

  function handleInputBlur() {
    setInputFocus(false);
  }

  function handleInputChange(e) {
    setInputVal(e.target.value);
  }

  async function handleSearchClick() {
    // const wordData = await fetchSearchData(inputVal);
    // onSearch(wordData[0]);
    onWordSearch(inputVal);
  }

  return (
    <section
      className={`h-12 rounded-2xl bg-surface-container dark:bg-surface-container-dark px-6 flex flex-row items-center gap-3 mb-6 ${
        inputFocus && "outline outline-1 outline-primary"
      }`}
    >
      <input
        className="flex-1 w-full bg-surface-container dark:bg-surface-container-dark text-base font-bold focus:outline-0 caret-primary"
        type="text"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        value={inputVal}
        onChange={handleInputChange}
      />
      <button onClick={handleSearchClick}>
        <img
          className="w-4 h-4"
          src={searchIcon}
          alt="icon depicting a magnifying glass"
        />
      </button>
    </section>
  );
}
