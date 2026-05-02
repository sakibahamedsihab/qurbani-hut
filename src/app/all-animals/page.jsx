import CowCard from "../components/CowCard";

export default async function AllAnimals() {
  const res = await fetch("http://localhost:3000/data.json");
  const cows = await res.json();

  return (
    <div>
      <h1 className="text-2xl text-[#1A6B3C] font-bold">All Animals</h1>
      <main className="grid grid-cols-4 gap-2">
        {cows.map(item => <CowCard key={item.id} item={item} />)}
      </main>
    </div>
  );
}
