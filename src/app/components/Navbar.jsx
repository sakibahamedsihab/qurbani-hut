import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex  justify-between items-center px-20 py-5 shadow-sm bg-white">
      <h1 className="text-4xl font-bold text-[#1A6B3C]">Qurbani Estate</h1>

      <ul className="font-bold space-x-5">
        <Link href={"/"}>Home</Link>
        <Link href={"/all-animals"}>All Animals</Link>
      </ul>

      <div className="flex gap-3">
        <button>Signup</button>
      </div>
    </nav>
  );
}
