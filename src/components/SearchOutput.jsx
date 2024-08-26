import { useEffect, useState } from "react";
import Meaning from "./Meaning.jsx";
import Phonetic from "./Phonetic.jsx";
import Source from "./Source.jsx";
import useFetchWord from "../hooks/useFetchWord.js";

export default function SearchOutput({ searchWord }) {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`;
  const [data, loading, error] = useFetchWord(url);

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
