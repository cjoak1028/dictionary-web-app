import { useEffect, useState } from "react";
import playIcon from "../assets/images/icon-play.svg";
// import Definition from "./Definition.jsx";
import newWindowIcon from "../assets/images/icon-new-window.svg";

export default function SearchOutput({ searchWord }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWordData(word) {
      const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const wordData = await response.json();
        setData(wordData[0]);

        // REMOVE TIMER
        setTimeout(() => {
          setLoading(false);
        }, "1000");
      } catch (error) {
        console.error(error.message);
        setLoading(false);
      }
    }

    if (searchWord) {
      setLoading(true);
      fetchWordData(searchWord);
    }
  }, [searchWord]);

  // REMOVE
  useEffect(() => {
    console.log(data);
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No word found.</div>;
  }

  return (
    <>
      <div className="flex flex-row justify-between items-center mb-8">
        <span>
          <h1 className="text-3xl font-bold mb-2">{data.word}</h1>
          <h3 className="text-lg font-light text-primary">
            {data.phonetic || data.phonetics[1].text}
          </h3>
        </span>
        <span>
          <button>
            <img className="w-12 h-12" src={playIcon} alt="" />
          </button>
        </span>
      </div>
      <div className="mb-8 md:mb-10">
        {data.meanings?.map((meaning, index) => {
          return (
            <div key={index} className="mb-8">
              <div className="flex flex-row items-center mb-8">
                <h2 className="mr-4 text-lg font-bold italic">
                  {meaning.partOfSpeech}
                </h2>
                <span className="h-px w-full bg-outline dark:bg-outline-dark"></span>
              </div>
              <div className="mb-6">
                <h4 className="text-on-surface-variant mb-4">Meaning</h4>
                <ul className="list-disc list-outside ms-4 space-y-3">
                  {meaning.definitions.map((def, index) => {
                    return (
                      <li key={index} className="text-primary-variant">
                        <p className="ml-3 text-on-surface dark:text-on-surface-dark">
                          {def.definition}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
              {meaning.synonyms.length !== 0 && (
                <div className="flex flex-row">
                  <h4 className="text-on-surface-variant mr-6">Synonyms</h4>
                  <ul className="flex flex-row flex-wrap gap-x-4">
                    {meaning.synonyms.map((syn, index) => {
                      return (
                        <li key={index} className="text-primary font-bold">
                          {syn}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="text-sm">
        <div className="h-px bg-outline dark:bg-outline-dark mb-6"></div>
        <h5 className="mb-2 text-on-surface-variant underline decoration-wavy">
          Source
        </h5>
        <a
          className="flex flex-row items-center gap-2"
          href={data.sourceUrls[0]}
        >
          <span className="break-all">{data.sourceUrls[0]}</span>
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
