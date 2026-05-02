import Gallery from "../components/Gallery";

export default async function AllAnimals() {
  const res = await fetch("http://localhost:3000/data.json");
  const cows = await res.json();

  return (
    <div>
      <h1 className="text-2xl text-[#1A6B3C] font-bold">All Animals</h1>
      <main>
        <Gallery cows={cows} />
      </main>
    </div>
  );
}
