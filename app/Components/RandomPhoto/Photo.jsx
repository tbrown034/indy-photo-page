import Image from "next/image";

export default function Photo({ src }) {
  return (
    <section className="relative h-[500px] w-full overflow-hidden rounded-3xl">
      {" "}
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
