import React from "react";
import img from "../../assets/lily-banse--YHSwy6uqvk-unsplash.jpg";
const FoodCatagory = () => {
  return (
    <div >
        <h4 className="text-3xl text-center">Food Catagories</h4> 
        <div className="flex flex-col lg:flex-row gap-3 m-40">
        <div className="bg-indigo-50 p-10 rounded w-80 my-3 text-left">
        <img className="w-40 h-40" src={img} alt="" />
        <h4 className="mt-8 mb-2 text-xl font-bold">"Beef Bhuna"</h4>
        <p className="text-gray-500">"Likes: 500"</p>
      </div>
      <div className="bg-indigo-50 p-10 rounded w-80 my-3 text-left">
        <img className="w-40 h-40" src={img} alt="" />
        <h4 className="mt-8 mb-2 text-xl font-bold">"Beef Bhuna"</h4>
        <p className="text-gray-500">"Likes: 500"</p>
      </div>
      <div className="bg-indigo-50 p-10 rounded w-80 my-3 text-left">
        <img className="w-40 h-40" src={img} alt="" />
        <h4 className="mt-8 mb-2 text-xl font-bold">"Beef Bhuna"</h4>
        <p className="text-gray-500">"Likes: 500"</p>
      </div>
      <div className="bg-indigo-50 p-10 rounded w-80 my-3 text-left">
        <img className="w-40 h-40" src={img} alt="" />
        <h4 className="mt-8 mb-2 text-xl font-bold">"Beef Bhuna"</h4>
        <p className="text-gray-500">"Likes: 500"</p>
      </div>
    </div>

        </div>
      
  );
};

export default FoodCatagory;
