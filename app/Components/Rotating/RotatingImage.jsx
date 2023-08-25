import Image from "next/image";

export default function RotatingImage({ src }) {
  return (
    <section className="relative w-full h-[500px] overflow-hidden rounded-3xl">
      <Image
        src={src}
        alt="Random Indy photo"
        fill={true}
        style={{ objectFit: "contain" }} // This will make sure the image covers the entire container
      />
    </section>
  );
}
