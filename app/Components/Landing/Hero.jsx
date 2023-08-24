export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 ">
      <h1 className="text-4xl font-bold ">Meet Indy Pup</h1>
      <h2 className="text-2xl ">He's the best boy in the whole wide world</h2>
      <button className="p-4 bg-emerald-300 rounded-2xl hover:bg-emerald-400 active:bg-emerald-600">
        More Pictures
      </button>
      <button className="p-4 hover:bg-emerald-400 active:bg-emerald-600 bg-emerald-300 rounded-2xl">
        About the Pup
      </button>
    </section>
  );
}
