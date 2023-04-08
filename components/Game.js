import { useState } from "react";
import { Cog8ToothIcon } from "@heroicons/react/20/solid";
import Button from "./Button";
import Level from "./Level";
import Dialog from "./Dialog";

const Game = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <section className="flex flex-col items-center max-w-lg text-center">
      <button className="ml-auto" onClick={() => setShowModal(true)}>
        <Cog8ToothIcon className="h-6 w-6 text-lightning-green-dark" />
      </button>
      <Level level="medium" />
      <Dialog isOpen={showModal} setIsOpen={setShowModal} />
      <h1 className="text-lightning-green-dark text-4xl leading-normal">
        If you were going to travel the world, would you prefer to do it alone
        or with friends?
      </h1>
      <p className="text-[10rem] leading-none text-lightning-green font-semibold my-4">
        60
      </p>
      <div className="flex gap-4">
        <Button>Start</Button>
        <Button disabled={true}>Reset</Button>
      </div>
    </section>
  );
};
export default Game;
