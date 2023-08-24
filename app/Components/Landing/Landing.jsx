import Hero from "./Hero";
import LeadImage from "./LeadImage";
import Bio from "./Bio";
import Header from "@/app/UI/Header";
export default function Landing() {
  return (
    <section className="flex flex-col gap-16">
      <Header />
      <div className="flex gap-6">
        <Hero />
        <LeadImage />
      </div>
      <Bio />
    </section>
  );
}
