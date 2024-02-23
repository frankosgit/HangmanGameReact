import Pictures from "./Pictures";
import { useEffect, useState } from "react";

const Game = () => {
  const [randomWord, setRandomWord] = useState("");

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
    setRandomWord(selectRandomWord());
  },
    []);

 
  return <div>
    <p>Selected Word : {randomWord}</p>
  </div>;
};

export default Game;

