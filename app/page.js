import Image from "next/image";
import Header from "./UI/Header.jsx";
import Footer from "./UI/Footer.jsx";
import Hero from "./Components/Landing/Hero.jsx";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Footer />
    </main>
  );
}
