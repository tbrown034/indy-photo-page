"use client";
import React, { useState, useEffect } from "react";
import RotatingImage from "./RotatingImage";
import { listAll, getDownloadURL } from "firebase/storage";
import { imagesRef } from "../../utils/firebase";
import { RightIcon } from "../Icons/icons";

export default function Rotation() {
  const [imageUrls, setImageUrls] = useState([]);
  const [currentImageUrl, setCurrentImageUrl] = useState("");

  // Fetch images and set a random image initially
  useEffect(() => {
    async function fetchImages() {
      const urls = [];
      const list = await listAll(imagesRef);
      for (const item of list.items) {
        const url = await getDownloadURL(item);
        urls.push(url);
      }
      setImageUrls(urls);
      const randomImage = urls[Math.floor(Math.random() * urls.length)];
      setCurrentImageUrl(randomImage);
    }
    fetchImages();
  }, []);

  // Set a new random image
  function nextImage() {
    const randomImage = imageUrls[Math.floor(Math.random() * imageUrls.length)];
    setCurrentImageUrl(randomImage);
  }

  return (
    <section className="flex flex-col items-center justify-center gap-6 p-6 border-8 border-emerald-600 rounded-2xl ">
      <h1 className="text-4xl font-bold">Random Indy Pic Generator</h1>
      <h2 className="text-2xl ">
        Feeling down? Bored? Just want to see an awesome pup? Click away!
      </h2>

      <RotatingImage imageUrl={currentImageUrl} />
      <button
        className="flex items-center justify-center gap-4 p-4 px-8 text-lg bg-emerald-300 rounded-3xl hover:bg-emerald-400 active:bg-emerald-600"
        onClick={nextImage}
      >
        <p className="text-lg font-semibold">Next Picture</p>
        <RightIcon />
      </button>
    </section>
  );
}
