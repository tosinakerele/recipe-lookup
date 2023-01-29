import RecipeList from "@/components/RecipeList";

const getRecipe = async (area) => {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`;
  const res = await fetch(url);
  const response = await res.json();
  return response;
};

const page = async ({ params }) => {
  const recipes = await getRecipe(params.type);

  return (
    <div className="">
      <RecipeList recipes={recipes.meals} type={params.type} />
    </div>
  );
};

export default page;
