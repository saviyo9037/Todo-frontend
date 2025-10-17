import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-6xl">Welcome! </h1>
      <div className="text-4xl font-serif text-cyan-950 font-medium">This is for studying purpose</div>
      </div>

      <div className="flex flex-col justify-center items-center m-5 p-3">
        <h2 className="text-2xl">Click below to view your profile</h2>
        <p className="font-bold font-mono">if you are not a user</p>
        <Link to="/profile" className="p-2 border-2 rounded-lg text-gray-500 font-semibold font-sans">Profile</Link>
      </div>

      <div className="flex flex-col justify-center items-center m-5 p-3">
        <p className="font-bold font-mono">then click here to register as a valid User</p>
        <Link to="/register" className="p-2 border-2 rounded-lg text-gray-500 font-semibold font-sans">Register</Link>
      </div>

      <div className="flex flex-col justify-center items-center m-5 p-3">
        <p className="font-bold font-mono">if you are a user still need to view your profile</p>
        <h1 className="text-4xl font-serif text-cyan-300 font-medium">please login</h1>
        <Link to="/login" className="p-2 border-2 rounded-lg text-gray-500 font-semibold font-sans">Login</Link>
      </div>
    </>
  );
};

export default Home;
