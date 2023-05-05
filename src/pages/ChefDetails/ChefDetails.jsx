import React from "react";
import { useLoaderData } from "react-router-dom";
import Recipe from "./Recipe";

const ChefDetails = () => {
  const chef = useLoaderData();
  const { id, photo, chef_name, likes, num_of_recipes, years_of_experience, recipes } = chef;
  console.log(recipes);
  return (
    <div>
      <section className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{chef_name}</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <p>Years of experience: {years_of_experience}</p>
            <p>Number of recipes: {num_of_recipes}</p>
            <p>Likes: {likes}</p>
          </div>
        </div>
      </section>
      <section className="">
      {
        recipes.map( recipe => <Recipe key={recipe.recipe_id}recipe= {recipe}></Recipe> )
      }
      </section>
    </div>
  );
};

export default ChefDetails;
