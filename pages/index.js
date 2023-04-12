import Instructions from "@/components/Instructions";
import WelcomeScreen from "@/components/WelcomeScreen";
import Countdown from "@/components/Countdown";
import { useState } from "react";
import Game from "@/components/Game";

export default function Home() {
  const [step, setStep] = useState("game");
  const [gameSettings, setGameSettings] = useState({
    totalSeconds: 60,
    totalQuestions: 10,
    level: "all",
  });

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      {step === "welcome" && <WelcomeScreen setStep={setStep} />}
      {step === "instructions" && <Instructions setStep={setStep} />}
      {step === "countdown" && <Countdown setStep={setStep} />}
      {step === "game" && (
        <Game
          setStep={setStep}
          settings={gameSettings}
          updateSettings={setGameSettings}
        />
      )}
    </div>
  );
}
