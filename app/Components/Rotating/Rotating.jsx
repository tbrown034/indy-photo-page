"use client";
import { useState } from "react";
import RotatingImage from "./RotatingImage";
import { RightIcon } from "../Icons/icons";

const images = Array.from({ length: 100 }, (_, i) => {
  return `/Images/Indy${i + 1}.jpeg`;
});

export default function Rotation() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextPicture = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * images.length);
    } while (randomIndex === currentIndex);
    setCurrentIndex(randomIndex);
  };

  const fileName = `Indy${currentIndex + 1}.jpeg`;

  return (
    <section className="flex flex-col items-center justify-center gap-6 p-6 border-8 border-emerald-600 rounded-2xl">
      <h1 className="text-4xl font-bold">Random Indy Pic Generator</h1>
      <h2 className="text-2xl">
        Feeling down? Bored? Just want to see an awesome pup? Click away!
      </h2>

      <RotatingImage src={images[currentIndex]} fileName={fileName} />
      <button
        onClick={handleNextPicture}
        className="flex items-center justify-center gap-4 p-4 px-8 text-lg bg-emerald-300 rounded-3xl hover:bg-emerald-400 active:bg-emerald-600"
      >
        <p className="text-lg font-semibold">Next Picture</p>
        <RightIcon />
      </button>
      <p className="text-lg font-medium">{fileName}</p>
    </section>
  );
}
