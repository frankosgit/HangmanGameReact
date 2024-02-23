import { useEffect, useState } from "react";

const Game = () => {
  const [randomWord, setRandomWord] = useState("");
  const [displayLetters, setDisplayLetters] = useState<string[]>([]);
  const [hasWon, setHasWon] = useState(Boolean);

  const handleGuess = (letter: string) => {
    const newDisplayLetters = randomWord
      .split("")
      .map((char, index) =>
        displayLetters[index] === "_" && char === letter
          ? char
          : displayLetters[index]
      );
    setDisplayLetters(newDisplayLetters);
  };

  useEffect(() => {
    const hangmanWords = [
      "uneasy",
      "baffle",
      "reason",
      "gadget",
      "ravage",
      "cancel",
      "narrow",
      "eagle",
      "quiver",
      "zodiac",
      "safety",
      "mellow",
      "walnut",
      "harbor",
      "damage",
      "impact",
      "admire",
      "quartz",
      "kettle",
      "liquid",
      "vortex",
      "packet",
      "galaxy",
      "jungle",
      "cactus",
      "magnet",
      "kernel",
      "fabric",
      "icebox",
      "jacket",
      "lament",
      "xylem",
      "vacant",
      "daemon",
      "oracle",
      "target",
      "effort",
      "zigzag",
      "waffle",
      "happen",
      "tablet",
      "number",
      "salmon",
      "paddle",
      "banner",
      "object",
      "yearly",
      "xenon",
      "abroad",
      "yellow",
      "update",
      "fallow",
    ];
    const selectRandomWord = () => {
      return hangmanWords[Math.floor(Math.random() * hangmanWords.length)];
    };

    const newRandomWord = selectRandomWord();
    setRandomWord(newRandomWord);
    setDisplayLetters(new Array(newRandomWord.length).fill("_"));
  }, []);

  const handleLetterInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    const letter = e.target.value;
    handleGuess(letter);
  
  };

  return (
    <div>
      <p>Selected Word : {displayLetters.join("")}</p>
      <input type="text" onChange={handleLetterInput} maxLength={1} />
      <p>Correct Word: {randomWord}</p>
      
    </div>
  );

};

export default Game;
