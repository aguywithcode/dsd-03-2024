import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const getNavLinkClass = ({ isActive }) => {
    return isActive
      ? "block py-2 px-4 rounded text-blue-500 bold"
      : "block py-2 px-4 rounded hover:bg-gray-300";
  };

  return (
    <div className="w-64 h-screen bg-gray-200 p-5">
      <nav className="space-y-2">
        <NavLink to="/dashboard" className={getNavLinkClass}>
          Dashboard
        </NavLink>
        <NavLink to="/pantry" className={getNavLinkClass}>
          Pantry
        </NavLink>
        <NavLink to="/recipes" className={getNavLinkClass}>
          Recipes
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;
