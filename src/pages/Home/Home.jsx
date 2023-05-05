import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import FoodCatagory from "./FoodCatagory";

const Home = () => {
  const chefs = useLoaderData();
  console.log(chefs);
  return (
    <div>
      <div className="m-24">
        {chefs.map((chef) => (
          <Card key={chef.id} chef={chef}></Card>
        ))}
      </div>
      <FoodCatagory></FoodCatagory>
    </div>
  );
};

export default Home;
