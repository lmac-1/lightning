import { useState, useEffect } from "react";

export default function useCountdown(totalSeconds) {
  const [seconds, setSeconds] = useState(totalSeconds);
  const [isTimerActive, setIsTimerActive] = useState(false);

  useEffect(() => {
    let timerInterval = null;

    if (seconds === 0) {
      setIsTimerActive(false);
    }

    if (isTimerActive) {
      timerInterval = setInterval(() => {
        setSeconds((s) => s - 1);
      }, 1000);
    } else if (!isTimerActive || seconds === 0) {
      clearInterval(timerInterval);
    }
    return () => clearInterval(timerInterval);
  }, [isTimerActive, seconds]);

  useEffect(() => {
    setSeconds(totalSeconds);
    setIsTimerActive(false);
  }, [totalSeconds]);

  const toggleTimer = () => {
    setIsTimerActive(!isTimerActive);
  };

  const resetTimer = () => {
    setIsTimerActive(false);
    setSeconds(totalSeconds);
  };

  return { seconds, isTimerActive, toggleTimer, resetTimer };
}
