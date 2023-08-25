import Image from "next/image";

export default function Photo({ src }) {
  return (
    <section className="relative w-96 h-96">
      <Image
        src={src}
        alt="Random Indy photo"
        fill={true}
        style={{
          objectFit: "cover", // Ensures that the image fits within its container
          borderRadius: "20%", // Makes the image fully round
        }}
      />
    </section>
  );
}
