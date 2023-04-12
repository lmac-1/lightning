import { useState } from "react";
import { Cog8ToothIcon } from "@heroicons/react/20/solid";
import Level from "./Level";
import Dialog from "./Dialog";
import Timer from "./Timer";
import useCountdown from "@/hooks/useCountdown";

const Game = ({ setStep, settings, updateSettings }) => {
  const [showModal, setShowModal] = useState(false);
  const { seconds, isTimerActive, toggleTimer, resetTimer } = useCountdown(
    settings.totalSeconds
  );

  const handleOpenModal = () => {
    setShowModal(true);
    if (isTimerActive) {
      toggleTimer();
    }
  };
  return (
    <section className="flex flex-col items-center max-w-lg text-center">
      <button className="ml-auto" onClick={handleOpenModal}>
        <Cog8ToothIcon className="h-6 w-6 text-lightning-green-dark" />
      </button>
      <Level level="medium" />
      <Dialog
        isOpen={showModal}
        setIsOpen={setShowModal}
        settings={settings}
        updateSettings={updateSettings}
      />
      <h1 className="text-lightning-green-dark text-4xl leading-normal">
        If you were going to travel the world, would you prefer to do it alone
        or with friends?
      </h1>
      <Timer
        seconds={seconds}
        isTimerActive={isTimerActive}
        toggleTimer={toggleTimer}
        resetTimer={resetTimer}
        totalSeconds={settings.totalSeconds}
      />
    </section>
  );
};
export default Game;
