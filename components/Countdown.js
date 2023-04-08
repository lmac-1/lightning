import { useState } from "react";

const Countdown = ({ seconds = 3, setStep }) => {
  const [count, setCount] = useState(seconds);

  const countdown = () => {
    setTimeout(() => {
      setCount(count - 1);
    }, 1000);
  };

  if (count > 0) {
    countdown();
  }

  if (count === 0) {
    setStep("game");
  }

  return (
    <div className="text-[12rem] text-lightning-green font-bold">{count}</div>
  );
};

export default Countdown;
