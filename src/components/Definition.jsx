export default function Definition() {
  return (
    <div className="mb-8">
      <div className="flex flex-row items-center mb-8">
        <h2 className="mr-4 text-lg font-bold italic">noun</h2>
        <span className="h-px w-full bg-outline dark:bg-outline-dark"></span>
      </div>
      <div className="mb-6">
        <h4 className="text-on-surface-variant mb-4">Meaning</h4>
        <ul className="list-disc list-outside ms-4 space-y-3">
          <li className="text-primary-variant">
            <p className="ml-3 text-on-surface dark:text-on-surface-dark">
              (etc.) A set of keys used to operate a typewriter, computer etc.
            </p>
          </li>
          <li className="text-primary-variant">
            <p className="ml-3 text-on-surface dark:text-on-surface-dark">
              A component of many instruments including the piano, organ, and
              harpsichord consisting of usually black and white keys that cause
              different tones to be produced when struck.
            </p>
            <p className="relative left-3 text-on-surface-variant mt-3">
              “Keyboarding is the part of this job I hate the most.”
            </p>
          </li>
          <li className="text-primary-variant">
            <p className="ml-3 text-on-surface dark:text-on-surface-dark">
              A device with keys of a musical keyboard, used to control
              electronic sound-producing devices which may be built into or
              separate from the keyboard
            </p>
          </li>
        </ul>
      </div>
      <div className="flex flex-row">
        <h4 className="text-on-surface-variant mr-6">Synonyms</h4>
        <ul className="flex flex-row flex-wrap gap-x-4">
          <li className="text-primary font-bold">electric keyboard</li>
        </ul>
      </div>
    </div>
  );
}
