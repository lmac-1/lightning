import Button from "./Button";

const Timer = ({
  totalSeconds,
  isTimerActive,
  resetTimer,
  seconds,
  toggleTimer,
  nextQuestion,
  gameOver,
}) => {
  const handleNextQuestion = () => {
    nextQuestion((q) => q + 1);
    resetTimer();
  };

  return (
    <div>
      <p className="text-[10rem] leading-none text-lightning-green my-4">
        {seconds}
      </p>
      <div className="flex flex-col gap-2">
        <div className="flex gap-4">
          <Button
            className="animate-bounce-short"
            onClick={toggleTimer}
            disabled={seconds === 0}
          >
            {!isTimerActive ? "Start" : "Pause"}
          </Button>
          <Button
            onClick={resetTimer}
            disabled={isTimerActive || seconds === totalSeconds}
          >
            Reset
          </Button>
        </div>
        <Button
          onClick={handleNextQuestion}
          disabled={seconds != 0 || gameOver}
        >
          {!gameOver ? "Next question" : "Game over!"}
        </Button>
      </div>
    </div>
  );
};

export default Timer;
