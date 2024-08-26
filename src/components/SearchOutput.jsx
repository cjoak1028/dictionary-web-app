import { useEffect, useState } from "react";
import Meaning from "./Meaning.jsx";
import Phonetic from "./Phonetic.jsx";
import Source from "./Source.jsx";

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
      <Phonetic data={data} />
      <div className="mb-8 md:mb-10">
        {data.meanings.map((meaning, index) => (
          <Meaning key={index} meaning={meaning} />
        ))}
      </div>
      <Source url={data.sourceUrls[0]} />
    </>
  );
}
