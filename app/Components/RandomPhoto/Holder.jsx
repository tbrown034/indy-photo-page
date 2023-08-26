"use client";
import { useState, useEffect } from "react";
import Photo from "./Photo";
import { LeftIcon, RightIcon } from "../Icons/icons";

const images = Array.from({ length: 100 }, (_, i) => {
  return `/Images/Indy${i + 1}.jpeg`;
});

export default function Holder() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndices, setPreviousIndices] = useState([]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setCurrentIndex(randomIndex);
  }, []);

  const handleNextPicture = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * images.length);
    } while (randomIndex === currentIndex);
    setPreviousIndices([...previousIndices, currentIndex]);
    setCurrentIndex(randomIndex);
  };

  const handlePreviousPicture = () => {
    if (previousIndices.length > 0) {
      const lastPreviousIndex = previousIndices.pop();
      setPreviousIndices([...previousIndices]);
      setCurrentIndex(lastPreviousIndex);
    }
  };

  const fileName = `Indy${currentIndex + 1}.jpeg`;

  return (
    <section className="flex flex-col items-center justify-center gap-4 p-8 rounded-2xl ">
      <button
        onClick={handleNextPicture}
        className="flex items-center justify-center gap-4 p-4 px-8 text-sm sm:text-lg bg-emerald-300 rounded-3xl hover:bg-emerald-400 active:bg-emerald-600"
      >
        <p className="text-lg font-semibold">Next Picture</p>
        <RightIcon />
      </button>
      <Photo src={images[currentIndex]} fileName={fileName} />
      <button
        onClick={handlePreviousPicture}
        className="flex items-center justify-center gap-4 p-4 px-8 text-lg bg-emerald-300 rounded-3xl hover:bg-emerald-400 active:bg-emerald-600"
        disabled={previousIndices.length === 0}
      >
        <LeftIcon />
        <p className="text-lg font-semibold">Go Back</p>
      </button>
      <code className="text-lg font-medium">File Name: {fileName}</code>
    </section>
  );
}
