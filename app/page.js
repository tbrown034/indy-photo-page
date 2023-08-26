import Hero from "./Components/Landing/Hero.jsx";
import Bio from "./Components/Landing/Bio.jsx";
import Holder from "./Components/RandomPhoto/Holder.jsx";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 p-4">
      <div>
        <Hero />
      </div>
      <div id="bio">
        <Bio />
      </div>
      <div id="Holder">
        <Holder />
      </div>
    </main>
  );
}
