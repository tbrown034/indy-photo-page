import RotatingImage from "./RotatingImage";
import { RightIcon } from "../Icons/icons";

export default function Rotation() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 p-6 border-8 border-emerald-600 rounded-2xl ">
      <h1 className="text-4xl font-bold">Random Indy Pic Generator</h1>
      <h2 className="text-2xl ">
        Feeling down? Bored? Just want to see an awesome pup? Click away!
      </h2>

      <RotatingImage />
      <button className="flex items-center justify-center gap-4 p-4 px-8 text-lg bg-emerald-300 rounded-3xl hover:bg-emerald-400 active:bg-emerald-600">
        <p className="text-lg font-semibold">Next Picture</p>

        <RightIcon />
      </button>
    </section>
  );
}
