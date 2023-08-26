import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4 ">
      <div className="container flex items-center justify-between mx-auto">
        <Link href="/" className="text-2xl font-bold text-emerald-600">
          Home
        </Link>
        <nav className="flex gap-6 font-semibold">
          <Link
            href="#Holder"
            className="text-gray-700 cursor-pointer hover:text-emerald-600"
          >
            Pup Pics
          </Link>
          <Link
            href="#bio"
            className="text-gray-700 cursor-pointer hover:text-emerald-600"
          >
            About
          </Link>
          <Link
            href="#footer"
            className="text-gray-700 cursor-pointer hover:text-emerald-600"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
