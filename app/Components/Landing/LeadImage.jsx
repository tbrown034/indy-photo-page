import Image from "next/image";
import Hero from "../../../public/Images/Hero.jpeg";

export default function LeadImage() {
  return (
    <section className="relative h-[500px] w-full overflow-hidden rounded-3xl">
      <Image
        src={Hero}
        alt="first Indy photo"
        fill={true}
        priority={true}
        style={{
          objectFit: "cover", // Ensures that the image fits within its container
          borderRadius: "20%", // Makes the image fully round
        }}
      />
    </section>
  );
}
