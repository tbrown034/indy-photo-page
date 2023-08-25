import Hero from "./Components/Landing/Hero.jsx";
import Bio from "./Components/Landing/Bio.jsx";
import Holder from "./Components/RandomPhoto/Holder.jsx";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 p-4 px-8 sm:px-12">
      <Hero />
      <div id="bio">
        <Bio />
      </div>

      <div id="Holder">
        {" "}
        <Holder />
      </div>
    </main>
  );
}
