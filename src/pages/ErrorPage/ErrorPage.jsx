import React from "react";
import img from "../../assets/Error.jpg";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Ooops!!!!</h1>
          <p className="mb-5">
            PAGE NOT FOUND
          </p>
          <button className="btn btn-primary"><Link to="/">Go to Home Page</Link></button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
