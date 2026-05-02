import { getDataWithId } from "@/utils/getData";
// import Details from "@/app/components/Details";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function DetailsPage({ params }) {
  const { id } = await params;
  const cow = await getDataWithId(id);

  if (!cow) {
    return <h1>Animal not found</h1>;
  }

  console.log(cow);
  return (
    <div className="flex flex-col gap-5">
      <Link
        href={"/all-animals"}
        className="flex items-center gap-2 text-[#1A6B3C] text-2xl font-semibold"
      >
        <ArrowLeft /> Back to All Animals
      </Link>
      {/* <main>{<Details key={cow.id} cow={cow} />}</main> */}
    </div>
  );
}
