import RotatingImage from "./RotatingImage";

export default function Rotation() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 p-6 ">
      <h1 className="text-4xl font-bold">Photo Center</h1>
      <h2 className="text-2xl text-center">
        Feeling down? Bored? Just want to see an awesome pup? Click away!
      </h2>

      <RotatingImage />
      <button className="p-4 hover:bg-emerald-400 active:bg-emerald-600 bg-emerald-300 rounded-2xl">
        Next Photo
      </button>
    </section>
  );
}
