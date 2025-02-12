import React, { useEffect, useState } from "react";
import "./PomodoroClock.css";
import Test13Explanation from "./Test13Explanation"; // Import the new component

const PomodoroClock: React.FC = () => {
  const [breakLength, setBreakLength] = useState<number>(5);
  const [sessionLength, setSessionLength] = useState<number>(25);
  const [timerLabel, setTimerLabel] = useState<string>("Session");
  const [timeLeft, setTimeLeft] = useState<number>(25 * 60); // Initial timeLeft = 25 minutes * 60 seconds
  const [timerRunning, setTimerRunning] = useState<boolean>(false);
  const [sessionType, setSessionType] = useState<"session" | "break">(
    "session"
  ); // Track session or break type

  useEffect(() => {
    setTimeLeft(sessionLength * 60); // Set timeLeft based on sessionLength whenever sessionLength changes
  }, [sessionLength]);

  const formatTime = (timeInSeconds: number): React.ReactNode => {
    // Or React.ReactNode
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return (
      // Return JSX
      <>
        <span>{minutes.toString().padStart(2, "0")}</span>:
        <span>{seconds.toString().padStart(2, "0")}</span>
      </>
    );
  };

  const decrementBreakLength = () => {
    setBreakLength((prevLength) => Math.max(1, prevLength - 1)); // Constraint: >= 1
  };

  const incrementBreakLength = () => {
    setBreakLength((prevLength) => Math.min(60, prevLength + 1)); // Constraint: <= 60
  };

  const decrementSessionLength = () => {
    setSessionLength((prevLength) => Math.max(1, prevLength - 1));
    if (!timerRunning && sessionType === "session") {
      setTimeLeft(sessionLength * 60); // Use current sessionLength state
    }
  };

  const incrementSessionLength = () => {
    setSessionLength((prevLength) => Math.min(60, prevLength + 1));
    if (!timerRunning && sessionType === "session") {
      setTimeLeft(sessionLength * 60); // Use current sessionLength state
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [intervalId, setIntervalId] = useState<any>(null); // Store interval ID, use 'any' as last resort

  const startStopTimer = () => {
    setTimerRunning((isRunning) => !isRunning); // Toggle timerRunning state
  };

  useEffect(() => {
    if (timerRunning) {
      const newIntervalId = setInterval(() => {
        setTimeLeft((prevTime) => {
          console.log("timeLeft before decrement:", prevTime); // Log BEFORE decrement

          if (prevTime <= 5 && prevTime > 0) {
            // Log for values close to zero
            console.log("timeLeft APPROACHING zero:", prevTime);
          }

          if (prevTime === 0) {
            console.log("--- TIMER REACHED ZERO --- (from inside useEffect)"); // Confirmation log
            clearInterval(newIntervalId);
            setIntervalId(null);
            setTimerRunning(false);
            if (beepSound.current) {
              beepSound.current.play();
            }

            if (sessionType === "session") {
              setTimerLabel("Break");
              setSessionType("break");
              setTimeLeft(breakLength * 60);
              setTimerRunning(true);
            } else {
              setTimerLabel("Session");
              setSessionType("session");
              setTimeLeft(sessionLength * 60);
              setTimerRunning(true);
            }
            return 0;
          } else {
            return prevTime - 1;
          }
        });
      }, 1000);
      setIntervalId(newIntervalId as unknown as number);
    } else if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [timerRunning, breakLength, sessionLength, sessionType]); // sessionType is REMOVED

  const beepSound = React.useRef<HTMLAudioElement>(null); // Ref for audio element

  const resetTimer = () => {
    setTimerRunning(false); // Stop timer
    if (intervalId) {
      // Check if intervalId is not null before clearing
      clearInterval(intervalId); // Clear interval if running and intervalId is a number
    }
    setIntervalId(null);
    setBreakLength(5); // Reset break length
    setSessionLength(25); // Reset session length
    setTimerLabel("Session"); // Reset timer label
    setTimeLeft(25 * 60); // Reset time left to default session length
    setSessionType("session"); // Reset session type
    if (beepSound.current) {
      // Stop and rewind audio
      beepSound.current.pause();
      beepSound.current.currentTime = 0;
    }
  };

  return (
    <div className="pomodoro-clock">
      <div className="settings">
        {/* Break Settings */}
        <div className="setting-group">
          <div id="break-label">Break Length</div>
          <div className="controls">
            <button id="break-decrement" onClick={decrementBreakLength}>
              -
            </button>{" "}
            {/* Added onClick */}
            <span id="break-length">{breakLength}</span>
            <button id="break-increment" onClick={incrementBreakLength}>
              +
            </button>{" "}
            {/* Added onClick */}
          </div>
        </div>

        {/* Session Settings */}
        <div className="setting-group">
          <div id="session-label">Session Length</div>
          <div className="controls">
            <button id="session-decrement" onClick={decrementSessionLength}>
              -
            </button>{" "}
            {/* Added onClick */}
            <span id="session-length">{sessionLength}</span>
            <button id="session-increment" onClick={incrementSessionLength}>
              +
            </button>{" "}
            {/* Added onClick */}
          </div>
        </div>
      </div>
      {/* Timer Display */}
      <div className="timer">
        <div id="timer-label">{timerLabel}</div>
        <div id="time-left">{formatTime(timeLeft)}</div>
        <div className="timer-controls">
          <button id="start_stop" onClick={startStopTimer}>
            Start/Stop
          </button>
          <button id="reset" onClick={resetTimer}>
            Reset
          </button>{" "}
          {/* Added onClick */}
        </div>
      </div>
      <audio
        id="beep"
        preload="auto"
        ref={beepSound}
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      ></audio>{" "}
      {/* Added ref */}
      <Test13Explanation />
    </div>
  );
};

export default PomodoroClock;
