import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Button from "./Button";
import Select from "./Select";
import { questions } from "@/config/settingsQuestions";
import findDefaultValue from "@/utils/findDefaultValue";

const MyDialog = ({ isOpen, setIsOpen, settings, updateSettings }) => {
  const { seconds, questions, difficulty } = questions;

  const [totalSeconds, setTotalSeconds] = useState(() =>
    findDefaultValue(seconds.options, settings.totalSeconds)
  );
  const [totalQuestions, setTotalQuestions] = useState(() =>
    findDefaultValue(questions.options, settings.totalQuestions)
  );
  const [level, setLevel] = useState(() =>
    findDefaultValue(difficulty.options, settings.level)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSettings({
      totalSeconds: totalSeconds.value,
      totalQuestions: totalQuestions.value,
      level: level.value,
    });
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        {/* The background, rendered as a fixed sibling to the panel container */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-sm rounded-xl bg-[#effaf4] px-8 py-6 shadow-xl text-lightning-green-dark">
              <Dialog.Title className="font-semibold text-xl mb-3">
                Personalise your game
              </Dialog.Title>
              <Dialog.Description className="mb-4">
                Adjust the settings of your game to suit your preferences and
                needs.
              </Dialog.Description>
              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <Select
                    question={questions.totalSeconds.questionText}
                    options={questions.totalSeconds.options}
                    selected={totalSeconds}
                    onSelectChange={setTotalSeconds}
                  />
                  <Select
                    question={questions.totalQuestions.questionText}
                    options={questions.totalQuestions.options}
                    selected={totalQuestions}
                    onSelectChange={setTotalQuestions}
                  />
                  <Select
                    question={questions.level.questionText}
                    options={questions.level.options}
                    selected={level}
                    onSelectChange={setLevel}
                  />
                </div>

                <Button className="w-full" onClick={() => setIsOpen(false)}>
                  Save
                </Button>
              </form>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default MyDialog;
