import Button from "./Button";

const Instructions = ({ setStep }) => {
  return (
    <section className="max-w-lg text-center">
      <h2 className="text-lightning-green text-5xl font-bold mb-4">
        Welcome to Lightning
      </h2>
      <div className="mb-8">
        <p className="text-lightning-green-dark mb-3">
          We will be doing an activity called lightning questions to practice
          your English speaking skills under pressure.
        </p>
        <p className="text-lightning-green-dark mb-3">
          A question will appear on screen, read it quickly and then start
          speaking until the timer reaches 0.
        </p>
      </div>
      <Button
        onClick={() => setStep("countdown")}
        className="block mx-auto"
        arrow={true}
      >
        Start game
      </Button>
    </section>
  );
};

export default Instructions;
