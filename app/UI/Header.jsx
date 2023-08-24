import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4 ">
      <div className="container flex items-center justify-between mx-auto">
        <div className="text-2xl font-bold text-emerald-600">Home</div>
        <nav className="flex gap-6 font-semibold">
          <Link
            href="/about"
            className="text-gray-700 cursor-pointer hover:text-emerald-600"
          >
            Daily Pup Pics
          </Link>
          <Link
            href="/about"
            className="text-gray-700 cursor-pointer hover:text-emerald-600"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 cursor-pointer hover:text-emerald-600"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
