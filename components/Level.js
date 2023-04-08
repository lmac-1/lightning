const Level = ({ level }) => {
  const levelEmoji = {
    easy: "👶",
    medium: "😎",
    hard: "🤓",
  };

  return (
    <div className="bg-lightning-green-dark text-white rounded-full px-3 py-1 text-sm mb-4">
      {level}
      <span className="ml-2">{levelEmoji[level]}</span>
    </div>
  );
};

export default Level;
