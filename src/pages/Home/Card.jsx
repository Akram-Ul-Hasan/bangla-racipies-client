import React from "react";
import { Link } from "react-router-dom";

const Card = ({ chef }) => {
  const { id,photo, chef_name, likes, num_of_recipes, years_of_experience } = chef;



  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 bg-slate-300 mb-10">
        <div className="">
          <img className="w-full" src={photo} />
        </div>
        <div className="p-12">
          <div>
            <h2 className="text-3xl font-bold text-black">{chef_name}</h2>
          </div>
          <div className="text-black">
            <p>Years of experience: {years_of_experience}</p>
            <p>Number of recipes: {num_of_recipes}</p>
            <p>Likes: {likes}</p>
          </div>
          <div className="">
            <button  className="btn btn-primary">  
            <Link to={`/chef/${id}`}>View Recipes</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
