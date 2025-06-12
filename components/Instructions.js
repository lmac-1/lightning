import { STEP } from '@/pages';
import Button from './Button';
import Dialog from './Dialog';

const Instructions = ({ setStep, settings, updateSettings }) => {
  return (
    <section className="max-w-sm sm:max-w-lg">
      <Dialog
        settings={settings}
        updateSettings={updateSettings}
        className="block"
      />
      <h2 className="text-lightning-green text-5xl font-bold mb-6 sm:mb-4">
        Welcome to Lightning
      </h2>
      <div className="mb-8">
        <p className="text-lightning-green-dark mb-3">
          We will be doing an activity called{' '}
          <span className="tracking-wider font-semibold mx-1">
            lightning questions
          </span>{' '}
          to practice your English speaking skills under pressure.
        </p>
        <p className="text-lightning-green-dark mb-3">
          A question will appear on screen – read it, then start the timer and
          start speaking until the timer reaches 0.
        </p>
      </div>
      <Button
        onClick={() => setStep(STEP.COUNTDOWN)}
        className="block mx-auto"
        arrow={true}
      >
        Start game
      </Button>
    </section>
  );
};

export default Instructions;
