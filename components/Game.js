import { useState } from 'react';
import Level from './Level';
import Dialog from './Dialog';
import Timer from './Timer';
import useCountdown from '@/hooks/useCountdown';

const Game = ({ settings, updateSettings, questions }) => {
  const { seconds, isTimerActive, toggleTimer, resetTimer } = useCountdown(
    settings.totalSeconds
  );
  const [questionIndex, setQuestionIndex] = useState(0);
  const gameOver = questionIndex === questions.length - 1;

  const onOpenDialog = () => {
    if (isTimerActive) {
      toggleTimer();
    }
  };
  return (
    <section className="flex flex-col items-center max-w-lg text-center">
      <Dialog
        settings={settings}
        updateSettings={updateSettings}
        onOpen={onOpenDialog}
      />
      <Level level={questions[questionIndex].level} />
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
