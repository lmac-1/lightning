import { useState } from "react";
import { Cog8ToothIcon } from "@heroicons/react/20/solid";
import Level from "./Level";
import Dialog from "./Dialog";
import Timer from "./Timer";
import useCountdown from "@/hooks/useCountdown";

const Game = ({ settings, updateSettings, questions }) => {
  const [showModal, setShowModal] = useState(false);
  const { seconds, isTimerActive, toggleTimer, resetTimer } = useCountdown(
    settings.totalSeconds
  );
  const [questionIndex, setQuestionIndex] = useState(0);
  const gameOver = questionIndex === questions.length - 1;

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
      <Level level={questions[questionIndex].level} />
      <Dialog
        isOpen={showModal}
        setIsOpen={setShowModal}
        settings={settings}
        updateSettings={updateSettings}
      />
      <h1 className="text-lightning-green-dark text-4xl leading-normal">
        {questions[questionIndex].question}
      </h1>
      <Timer
        seconds={seconds}
        isTimerActive={isTimerActive}
        toggleTimer={toggleTimer}
        resetTimer={resetTimer}
        totalSeconds={settings.totalSeconds}
        nextQuestion={setQuestionIndex}
        gameOver={gameOver}
      />
    </section>
  );
};
export default Game;
