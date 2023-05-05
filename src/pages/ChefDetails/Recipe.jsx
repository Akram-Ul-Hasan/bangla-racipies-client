import React from "react";

const Recipe = ({ recipe }) => {
  console.log(recipe);
  const { cooking_method, ingredients, name, rating, recipe_photo } = recipe;
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="w-1/4">
          <img
          className="w-full"
            src={recipe_photo}
            alt="Album"
          />
        </div>
        <div className="">
          <h2 className="text-2xl font-bold">{name}</h2>
          <div className="flex gap-10">
            <div>
                <h4 className="text-xl
                ">Ingredients:</h4>
                <ul>
                {
                    ingredients.map( ingredient => <li>{ingredient}</li> )
                }
                </ul>
            </div>
            <div>
                <h4 className="text-xl">Cooking method:</h4>
                <ul>
                {
                    cooking_method.map( step => <li>{step}</li> )
                }
                </ul>
            </div>
          </div>
          <p>Ratings: {rating}</p>
          <div className="">
            <button className="btn btn-primary">Favourite</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
