import LeadImage from "./LeadImage";
import { DownIcon } from "../Icons/icons";

export default function Hero() {
  return (
    <section className="flex flex-col justify-between gap-4">
      <div className="sm:text-center">
        <h1 className="text-6xl font-bold ">Meet Indy</h1>
        <h2 className="text-3xl font-semibold ">
          He&apos;s the Goodest Boy in the Whole Wide World.
        </h2>{" "}
      </div>

      <LeadImage />
      <div className="flex justify-around gap-4">
        <a
          href="#Holder"
          className="flex flex-col items-center justify-center p-4 px-8 text-lg bg-emerald-300 rounded-3xl hover:bg-emerald-400 active:bg-emerald-600"
        >
          <p className="text-lg font-semibold">More Pictures</p>

          <DownIcon />
        </a>
      </div>
    </section>
  );
}
