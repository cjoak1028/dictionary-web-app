import Meaning from "./Meaning.jsx";
import Phonetic from "./Phonetic.jsx";
import Source from "./Source.jsx";
import useFetchWord from "../hooks/useFetchWord.js";

export default function SearchOutput({ searchWord }) {
  const [data, loading, error] = useFetchWord(searchWord);

  if (loading) {
    return (
      <p className="mt-32 text-center text-lg text-on-surface-variant">
        Loading...
      </p>
    );
  }

  if (error) {
    return (
      <div className="mt-32">
        <p className="text-6xl text-center">😕</p>
        <h3 className="mt-11 font-bold text-xl text-center">
          No Definitions Found
        </h3>
        <p className="mt-6 text-center text-lg text-on-surface-variant">
          Sorry pal, we couldn&apos;t find definitions for the word you were
          looking for. You can try the search again at later time or head to the
          web instead.
        </p>
      </div>
    );
  }

  return data ? (
    <>
      <Phonetic data={data} />
      <div className="mb-8 md:mb-10">
        {data.meanings.map((meaning, index) => (
          <Meaning key={index} meaning={meaning} />
        ))}
      </div>
      <Source url={data.sourceUrls[0]} />
    </>
  ) : null;
}
