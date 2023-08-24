import Image from "next/image";
import Hero from "../../../public/Images/Hero.jpeg";

export default function LeadImage() {
  return (
    <section className="relative h-[500px] w-full overflow-hidden rounded-3xl">
      <Image
        src={Hero}
        alt="first Indy photo"
        layout="fill"
        objectFit="cover"
        priority={true}
      />
    </section>
  );
}
