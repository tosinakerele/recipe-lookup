// import Link from "next/link";

import Image from "next/image";
import Link from "next/link";

const RecipeList = ({ recipes, type }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-4 rounded-sm p-5">
      {recipes.map((recipe, idx) => (
        <div key={idx} className="rounded bg-slate-300">
          <Image
            src={recipe?.strMealThumb}
            alt="food image"
            className="overflow-hidden object-contain"
            width={500}
            height={500}
          />
          <div className="bg-slate-300 p-4 rounded-b">
            <h2 className="font-bold text-xl leading-loose whitespace-nowrap overflow-auto mb-4">
              {recipe.strMeal}
            </h2>
            <div className="btn flex items-center justify-between">
              <Link
                href={`/types/${type}/${recipe.idMeal}`}
                className="rounded text-white p-2 bg-blue-500"
              >
                Get Recipe Details
              </Link>
              <Link href="/" className="rounded text-white p-2 bg-red-500">
                Add to Cart
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
