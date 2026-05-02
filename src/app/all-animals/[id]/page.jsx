import { getDataWithId } from "@/utils/getData";
import Details from "@/app/components/Details";

export default async function DetailsPage({ params }) {
  const { id } = await params;
  const cow = await getDataWithId(id);

  if (!cow) {
    return <h1>Animal not found</h1>;
  }

  console.log(cow);
  return (
    <div>
      <h1>Details</h1>
      <main>{<Details key={cow.id} cow={cow} />}</main>
    </div>
  );
}
