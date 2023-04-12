import { useState, useEffect } from "react";

export default function useCountdown(totalSeconds) {
  const [seconds, setSeconds] = useState(totalSeconds);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (seconds === 0) {
      setIsActive(false);
    }

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((s) => s - 1);
      }, 50);
    } else if (!isActive || seconds === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSeconds(totalSeconds);
  };

  return { seconds, isActive, toggleTimer, resetTimer };
}
