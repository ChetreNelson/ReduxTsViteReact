import React from "react";
import { Link } from "react-router-dom";
const navbar = () => {
  
  return (
    <div className="w-full ">
      <ul className="flex  justify-center  items-center space-x-56  h-10 bg-black text-white ">
         <li> <Link to={"/home"}>Home</Link></li>
        <li><Link to={"/about"}>About</Link></li>
        <li><Link to={"/userinfo"}>LoginInfo</Link></li>
        <li><Link to={"/"}>Logout</Link></li>
      </ul>
    </div>
  );
};

export default navbar;
