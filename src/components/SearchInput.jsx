import { useState } from "react";
import searchIcon from "../assets/images/icon-search.svg";

export default function SearchInput() {
  const [inputFocus, setInputFocus] = useState(false);
  const [inputVal, setInputVal] = useState("");

  function handleInputFocus() {
    setInputFocus(true);
  }

  function handleInputBlur() {
    setInputFocus(false);
  }

  function handleInputChange(e) {
    setInputVal(e.target.value);
  }

  async function fetchSearchData() {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputVal}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error.message);
    }
  }

  async function handleSearchClick() {
    const wordData = await fetchSearchData();
    console.log(wordData);
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
