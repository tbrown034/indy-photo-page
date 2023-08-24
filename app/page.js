import Landing from "./Components/Landing/Landing.jsx";
import Rotating from "./Components/Rotating/Rotating.jsx";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 p-8">
      <Landing />
      <Rotating />
    </main>
  );
}
