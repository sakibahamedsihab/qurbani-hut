import { Button } from "@heroui/react";
import CowCard from "./CowCard";
import { getData } from "@/utils/getData";

export default async function Feature() {
  const cows = await getData();
  const firstFourCows = cows.slice(0, 4);

  return (
    <div className="space-y-5">
      <h1 className="text-2xl text-[#1A6B3C] font-bold">Feature Section</h1>
      <main className="grid grid-cols-4 gap-2">
        {firstFourCows.map((item) => (
          <CowCard key={item.id} item={item} />
        ))}
      </main>
    </div>
  );
}
