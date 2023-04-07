export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <section className="text-center">
        <h1
          className={
            "text-8xl font-bold -tracking-[5px] text-lightning-green mb-4"
          }
        >
          Lightning
        </h1>
        <div className="text-lightning-green-dark">
          Put your English skills to the test
        </div>
        <button>Let's go</button>
      </section>
    </div>
  );
}
