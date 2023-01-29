import Link from "next/link";

const fetchRecipeAreas = async () => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
  );
  const response = await res.json();
  return response.meals;
};

const page = async () => {
  const areas = await fetchRecipeAreas();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-4 text-center rounded-sm p-5">
      {areas.map((area, idx) => (
        <Link
          href={`/types/${area.strArea}`}
          key={idx}
          className="shadow-gray-500 bg-gray-300 text-2xl py-10 font-bold hover:bg-blue-500 hover:text-white"
        >
          {area.strArea}
        </Link>
      ))}
    </div>
  );
};

export default page;
