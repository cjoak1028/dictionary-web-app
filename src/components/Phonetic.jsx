import playIcon from "../assets/images/icon-play.svg";

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
        <h1 className="text-3xl font-bold mb-2">{data.word}</h1>
        <h3 className="text-lg font-light text-primary">
          {getPhoneticText(data)}
        </h3>
      </span>
      <span>
        <button onClick={() => playPhoneticAudio(data)}>
          <img className="w-12 h-12" src={playIcon} alt="play button icon" />
        </button>
      </span>
    </div>
  );
}
