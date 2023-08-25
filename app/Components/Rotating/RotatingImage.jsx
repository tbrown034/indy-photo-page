import React, { useState, useEffect } from "react";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { imagesRef } from "../../utils/firebase";
import Image from "next/image";

export default function RotatingImage({ setImageUrl, imageUrl }) {
  return (
    <section className="relative w-full h-[500px] overflow-hidden  rounded-3xl ">
      <Image
        src={imageUrl}
        alt="Random Indy photo"
        layout="fill"
        objectFit="cover"
      />
    </section>
  );
}
