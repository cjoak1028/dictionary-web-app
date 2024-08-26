export default function Meaning({ meaning }) {
  return (
    <div className="mb-8">
      <div className="flex flex-row items-center mb-8">
        <h2 className="mr-4 text-lg font-bold italic">
          {meaning.partOfSpeech}
        </h2>
        <span className="h-px w-full bg-outline dark:bg-outline-dark"></span>
      </div>
      <div className="mb-6">
        <h4 className="text-on-surface-variant mb-4">Meaning</h4>
        <ul className="list-disc list-outside ms-4 space-y-3">
          {meaning.definitions.map((def, index) => (
            <li key={index} className="text-primary-variant">
              <p className="ml-3 text-on-surface dark:text-on-surface-dark">
                {def.definition}
              </p>
            </li>
          ))}
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
}
