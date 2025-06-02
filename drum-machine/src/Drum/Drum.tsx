import type { AudioClip } from "../types";

interface DrumProps {
  audioClip: AudioClip;
}


const Drum = ({audioClip}: DrumProps) => {
  const playSound = (clip: AudioClip) => {
    (document.getElementById(clip.keyTrigger) as HTMLAudioElement)
    .play()
    .catch(console.error);

    document.getElementById("display")!.innerText = clip.description;


    };

  // This function is called when the button is clicked


  return (
  <button
    className="drum-pad"
    id={`drum-${audioClip.keyTrigger}`}
    onClick={() => playSound(audioClip)}
  
  >
    <audio
      className="clip"
      id={audioClip.keyTrigger}
      src={audioClip.url}
    />
    {audioClip.keyTrigger}
   
  </button>
  )
}

export default Drum;