import PlayButton from "./PlayButton.jsx";

export default function Phonetic({ data }) {
  // Extract valid phonetic text from data
  function getPhoneticText(data) {
    if (data.phonetic) {
      return data.phonetic;
    }

    const firstValidPhonetic = data.phonetics.find(
      (phonetic) => phonetic.text && phonetic.text.trim() !== ""
    );
    return firstValidPhonetic ? firstValidPhonetic.text : "//";
  }

  // Extract valid audio url from data
  function getPhoneticAudioUrl(data) {
    const phoneticWithAudio = data.phonetics.find(
      (phonetic) => phonetic.audio && phonetic.audio.trim() !== ""
    );
    return phoneticWithAudio ? phoneticWithAudio.audio : null;
  }

  // Play audio if valid audio url exists
  function playPhoneticAudio(data) {
    const audioUrl = getPhoneticAudioUrl(data);
    if (!audioUrl) {
      return;
    }
    const audio = new Audio(audioUrl);
    audio.play();
  }

  return (
    <div className="flex flex-row justify-between items-center mb-8">
      <span>
        <h1 className="text-3xl md:text-6xl font-bold mb-2 md:mb-4">
          {data.word}
        </h1>
        <h3 className="text-lg md:text-2xl font-light text-primary">
          {getPhoneticText(data)}
        </h3>
      </span>
      <span>
        <PlayButton onClick={() => playPhoneticAudio(data)} />
      </span>
    </div>
  );
}
