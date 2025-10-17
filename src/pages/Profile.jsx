import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const user = useSelector((state)=>state.user)


  return (
    <div className="flex flex-col justify-center items-center">

      <div className="h-2/5 mt-5 border-l-indigo-600 text-gray-950 font-bold flex flex-col justify-center items-center">
        <div className="font-mono text-cyan-400 text-3xl">Name: {user.name}</div>
        <div className="font-mono text-cyan-400 text-3xl">Email: {user.email}</div>
      </div>

      <div className="h-3/5 w-2/5 mt-14 bg-slate-500 border-l-indigo-600 border-4 text-gray-950 font-bold flex flex-col justify-center items-center">
        <div>
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-7 p-2"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-14 p-2"
          />
        </div>
        <div>
          <button className="p-3 bg-lime-500 border-2">Update</button>
          <button className="p-3 bg-red-700 border-2">Delete Account</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
