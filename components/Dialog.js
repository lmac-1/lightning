import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Button from "./Button";
import Select from "./Select";

const MyDialog = ({ isOpen, setIsOpen, settings, updateSettings }) => {
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
              <div className="mb-5">
                <Select
                  question="Speaking time:"
                  options={[
                    { name: "30 seconds", value: 30 },
                    { name: "60 seconds", value: 60 },
                    { name: "120 seconds", value: 120 },
                  ]}
                />
                <Select
                  question="Total questions"
                  options={[
                    { name: "1", value: 1 },
                    { name: "5", value: 5 },
                    { name: "10", value: 10 },
                    { name: "Unlimited", value: "unlimited" },
                  ]}
                />
                <Select
                  question="Level"
                  options={[
                    { name: "Easy", value: "easy" },
                    { name: "Medium", value: "medium" },
                    { name: "Hard", value: "hard" },
                    { name: "All", value: "all" },
                  ]}
                />
              </div>

              <Button className="w-full" onClick={() => setIsOpen(false)}>
                Save
              </Button>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default MyDialog;
