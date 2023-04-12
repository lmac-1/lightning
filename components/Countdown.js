import { useEffect, useState } from "react";

const Countdown = ({ seconds = 3, setStep }) => {
  const [count, setCount] = useState(seconds);

  useEffect(() => {
    if (count === 0) {
      setStep("game");
      return;
    }

    const countdownInterval = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, [count, setStep]);

  return (
    <div className="text-[12rem] text-lightning-green font-bold">{count}</div>
  );
};

export default Countdown;
