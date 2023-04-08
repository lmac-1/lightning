import Button from "@/components/Button";

const WelcomeScreen = ({ setStep }) => {
  return (
    <section className="text-center">
      <h1
        className={
          "text-6xl sm:text-8xl font-bold -tracking-[3px] sm:-tracking-[5px] text-lightning-green mb-4"
        }
      >
        Lightning
      </h1>
      <div className="text-lightning-green-dark mb-6">
        Put your English speaking skills to the test
      </div>
      <Button onClick={() => setStep("instructions")} arrow={true}>
        Let&apos;s go{" "}
      </Button>
    </section>
  );
};

export default WelcomeScreen;
