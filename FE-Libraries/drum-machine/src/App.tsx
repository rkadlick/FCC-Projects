import React, { useState, useEffect } from 'react';
import './DrumMachine.css';

interface Sound {
  sound: string;
  description: string;
  audioRef: React.RefObject<HTMLAudioElement>; // Add audioRef
}

const sounds: { [key: string]: Sound } = {
  // ... (Your sound data - same as before)
  Q: { sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', description: 'Heater 1', audioRef: React.createRef<HTMLAudioElement>() },
  W: { sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3', description: 'Heater 2', audioRef: React.createRef<HTMLAudioElement>() },
  E: { sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3', description: 'Heater 3', audioRef: React.createRef<HTMLAudioElement>() },
  A: { sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3', description: 'Heater 4', audioRef: React.createRef<HTMLAudioElement>() },
  S: { sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3', description: 'Heater 6', audioRef: React.createRef<HTMLAudioElement>() },
  D: { sound: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3', description: 'Open HH', audioRef: React.createRef<HTMLAudioElement>() },
  Z: { sound: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3', description: 'Kick n Hat', audioRef: React.createRef<HTMLAudioElement>() },
  X: { sound: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3', description: 'RP4 Kick', audioRef: React.createRef<HTMLAudioElement>() },
  C: { sound: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3', description: 'Closed HH', audioRef: React.createRef<HTMLAudioElement>() },
};

const DrumMachine: React.FC = () => {
  const [display, setDisplay] = useState<string>('Press a Key Below');

  const playSound = (id: string) => {
    const audio = sounds[id].audioRef.current; // Access using .current

    if (audio) {
      audio.play().catch(error => {
        console.error("Error playing sound:", error); // Handle potential errors
        // You could also display a message to the user here.
      });
      setDisplay(sounds[id].description);
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
      <h1 id="display">{display}</h1>
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
              ref={sounds[key].audioRef} // Assign the ref
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrumMachine;