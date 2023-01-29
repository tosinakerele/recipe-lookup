"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const getRecipeDetails = async (id) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const res = await fetch(url);
  const response = await res.json();
  return response;
};

const page = async ({ params }) => {
  const ans = await getRecipeDetails(params.id);
  const recipeDetails = ans.meals[0];
  const ingredientsKeys = Object.keys(recipeDetails)
    .filter((key) => key.indexOf("Ingredient") > 0)
    .map((ingKey) => recipeDetails[ingKey])
    .filter(Boolean);

  console.log(ingredientsKeys);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="">
        <Image
          src={recipeDetails?.strMealThumb}
          alt={recipeDetails.strMeal}
          width={500}
          height={500}
          className="w-full h-full"
        />
      </div>
      <div className="px-4 md:px-0">
        <h2>
          Recipe Name:
          <span className="font-bold text-2xl"> {recipeDetails.strMeal}</span>
        </h2>
        <h2>Ingredients List:</h2>
        <ul className="flex flex-wrap group gap-3">
          {/* {ingredientValues.map((item, idx) => (
            <li key={idx} className="rounded bg-blue-500 py-1 px-2 text-white">
              {item}
            </li>
          ))} */}
        </ul>
        <p>
          Video Link:{" "}
          <Link
            className="text-blue-500"
            href={`${recipeDetails.strYoutube}`}
            target={"_blank"}
          >
            How to make {recipeDetails.strMeal}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default page;
