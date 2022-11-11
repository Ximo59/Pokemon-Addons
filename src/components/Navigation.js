import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/">
          <li>Acceuil</li>
        </NavLink>
        <NavLink to="/pokedex">
          <li>Pokedex</li>
        </NavLink>
        <NavLink to="/team-builder">
          <li>Team Builder</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
