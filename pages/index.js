import Instructions from "@/components/Instructions";
import WelcomeScreen from "@/components/WelcomeScreen";
import Countdown from "@/components/Countdown";
import { useEffect, useState } from "react";
import Game from "@/components/Game";
import data from "@/data/db";
import getGameQuestions from "@/utils/getGameQuestions";

export default function Home() {
  const [step, setStep] = useState("welcome");
  const [gameSettings, setGameSettings] = useState({
    totalSeconds: 60,
    totalQuestions: 10,
    level: "all",
  });
  const [gameQuestions, setGameQuestions] = useState([]);

  // Sets the questions for the game based on settings
  useEffect(() => {
    const { totalQuestions, level } = gameSettings;
    setGameQuestions(getGameQuestions(data, totalQuestions, level));
  }, [gameSettings]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      {step === "welcome" && <WelcomeScreen setStep={setStep} />}
      {step === "instructions" && <Instructions setStep={setStep} />}
      {step === "countdown" && <Countdown setStep={setStep} />}
      {step === "game" && (
        <Game
          settings={gameSettings}
          updateSettings={setGameSettings}
          questions={gameQuestions}
        />
      )}
    </div>
  );
}
