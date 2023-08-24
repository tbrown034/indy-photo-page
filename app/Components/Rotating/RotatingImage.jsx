import Image from "next/image";
import Image2 from "../../../public/Images/Image2.jpeg";

export default function RotatingImage() {
  return (
    <section className="relative w-full h-[500px] overflow-hidden  rounded-3xl ">
      <Image
        src={Image2}
        alt="first Indy photo"
        layout="fill"
        objectFit="cover"
      />
    </section>
  );
}
