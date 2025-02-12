import React, { useState, useEffect } from 'react'; // useRef is not needed here
import './DrumMachine.css';

interface Sound {
  sound: string;
  description: string;
  audioRef: React.RefObject<HTMLAudioElement | null>; // Allow null in the interface
}

const sounds: { [key: string]: Sound } = {
  Q: { sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', description: 'Heater 1', audioRef: React.createRef<HTMLAudioElement | null>() },
  W: { sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3', description: 'Heater 2', audioRef: React.createRef<HTMLAudioElement | null>() },
  E: { sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3', description: 'Heater 3', audioRef: React.createRef<HTMLAudioElement | null>() },
  A: { sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3', description: 'Heater 4', audioRef: React.createRef<HTMLAudioElement | null>() },
  S: { sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3', description: 'Heater 6', audioRef: React.createRef<HTMLAudioElement | null>() },
  D: { sound: 'https://s3.amazonaws.com/freecodecamp/drums/Drums-01.mp3', description: 'Drums 1', audioRef: React.createRef<HTMLAudioElement | null>() },
  Z: { sound: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3', description: 'Kick n Hat', audioRef: React.createRef<HTMLAudioElement | null>() },
  X: { sound: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3', description: 'RP4 Kick', audioRef: React.createRef<HTMLAudioElement | null>() },
  C: { sound: 'https://s3.amazonaws.com/freecodecamp/drums/Cymbal_1.mp3', description: 'Cymbal 1', audioRef: React.createRef<HTMLAudioElement | null>() },
};

const DrumMachine: React.FC = () => {
  const [display, setDisplay] = useState<string>('');

  const playSound = (id: string) => {
    const audio = sounds[id].audioRef.current;

    if (audio) {
      audio.play().catch(error => {
        console.error("Error playing sound:", error);
      });
      setDisplay(sounds[id].description);
    } else {
      console.error(`Audio element for ${id} not found.`);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toUpperCase();
      if (sounds[key]) {
        playSound(key);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div id="drum-machine">
      <div id="display">{display}</div>
      <div className="drum-pads">
        {Object.keys(sounds).map((key) => (
          <div
            key={key}
            className="drum-pad"
            id={key}
            onClick={() => playSound(key)}
          >
            {key}
            <audio
              className="clip"
              id={key}
              src={sounds[key].sound}
              ref={sounds[key].audioRef}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrumMachine;