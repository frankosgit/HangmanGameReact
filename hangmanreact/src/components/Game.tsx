import Pictures from "./Pictures";
import { useEffect, useState } from "react";

const Game = () => {
  const [randomWord, setRandomWord] = useState("");
  const [displayLetters, setDisplayLetters] = useState<string[]>([]);

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
    const word = hangmanWords[Math.floor(Math.random() * hangmanWords.length)];
    setRandomWord(word);
    
   
    const initialDisplayLetters = word.split('').map((char, index) => index === 0 ? char : '_');
    setDisplayLetters(initialDisplayLetters);
  },
    []);

 
  return <div>
    <p>Selected Word : {displayLetters.join('')}</p>
  </div>;
};

export default Game;

