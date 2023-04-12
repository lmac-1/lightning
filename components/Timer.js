import Button from "./Button";

const Timer = ({
  totalSeconds,
  isTimerActive,
  resetTimer,
  seconds,
  toggleTimer,
}) => {
  return (
    <div>
      <p className="text-[10rem] leading-none text-lightning-green my-4">
        {seconds}
      </p>
      <div className="flex flex-col gap-2">
        <div className="flex gap-4">
          <Button onClick={toggleTimer} disabled={seconds === 0}>
            {!isTimerActive ? "Start" : "Pause"}
          </Button>
          <Button
            onClick={resetTimer}
            disabled={isTimerActive || seconds === totalSeconds}
          >
            Reset
          </Button>
        </div>
        <Button disabled={seconds != 0}>Next question</Button>
      </div>
    </div>
  );
};

export default Timer;
