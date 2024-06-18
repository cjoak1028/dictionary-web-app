export default function Definition() {
  return (
    <div className="mb-8">
      <div className="flex flex-row items-center mb-8">
        <h2 className="mr-4 text-lg font-bold italic">noun</h2>
        <span className="h-px w-full bg-gray-200"></span>
      </div>
      <div className="mb-6">
        <h4 className="text-zinc-500 mb-4">Meaning</h4>
        <ul className="list-disc list-outside ms-4 space-y-3">
          <li className="text-purple-600">
            <div className="relative left-3 text-black">
              (etc.) A set of keys used to operate a typewriter, computer etc.
            </div>
          </li>
          <li className="text-purple-600">
            <div className="relative left-3 text-black">
              A component of many instruments including the piano, organ, and
              harpsichord consisting of usually black and white keys that cause
              different tones to be produced when struck.
            </div>
            <div className="relative left-3 text-zinc-500 mt-3">
              “Keyboarding is the part of this job I hate the most.”
            </div>
          </li>
          <li className="text-purple-600">
            <div className="relative left-3 text-black">
              A device with keys of a musical keyboard, used to control
              electronic sound-producing devices which may be built into or
              separate from the keyboard
            </div>
          </li>
        </ul>
      </div>
      <div className="flex flex-row">
        <h4 className="text-zinc-500 mr-6">Synonyms</h4>
        <ul className="flex flex-row flex-wrap gap-x-4">
          <li className="text-purple-500 font-bold">electric keyboard</li>
        </ul>
      </div>
    </div>
  );
}
