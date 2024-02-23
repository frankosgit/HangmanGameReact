import { useEffect, useState } from "react";
import { Player } from "../models/playerModels";

interface IGameProps {
  playerOne: Player
  playerTwo: Player
  toggleActivePlayerOne: () => void
}

const Game = ({ playerOne, playerTwo, toggleActivePlayerOne }: IGameProps) => {


  const [randomWord, setRandomWord] = useState("");
  const [displayLetters, setDisplayLetters] = useState<string[]>([]);
  const [hasWon, setHasWon] = useState(Boolean);
  const [showWord, setShowWord] = useState(Boolean)

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

  const handleShowWord = () => {
  setShowWord(!showWord)
  }

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

  const handleLetterInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const letter = e.target.value;
    handleGuess(letter);

  };

  useEffect(() => {
    toggleActivePlayerOne
  }, [playerTwo.name])

  return (
    <div>
      <div className="flex flex-col mb-12">
      <h1 className="text-primary mb-6">player one: {playerOne.name} lives:{playerOne.lives}</h1>
      <h1 className="text-secondary">player two: {playerTwo.name}  lives:{playerTwo.lives}</h1>
      </div>
     

      <input onChange={handleLetterInput} maxLength={1} type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs mb-12"/>
      {playerOne.inputActive && <input name='name' type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs mb-12"/>}
      <h3>Selected Word : {displayLetters.join("")}</h3>
       {showWord && <h3>Correct Word: {randomWord}</h3>}

   <button onClick={handleShowWord}> show</button> </div>
  );

};

export default Game;
