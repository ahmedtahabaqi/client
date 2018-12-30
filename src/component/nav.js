import React from "react";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <article className="continerNav">
        <article className="HomeAddNav">
          <div>
            <NavLink className="Homebtn" exact to="/">
              {"Home "}
            </NavLink>
          </div>
          <div>
            <NavLink className="Homebtn" exact to="/Categores">
              Categores
            </NavLink>
          </div>
          <div>
            <NavLink className="Addbtn" to="/Add">
              Add
            </NavLink>
          </div>
        </article>
        <input className="search" placeholder=" Search" />
        <article className="SignNav">
          <div>
            <NavLink className="Signinbtn" to="/SignIn">
              Sign in
            </NavLink>
          </div>
          <div>
            <NavLink className="Signupbtn" to="/SignUp">
              Sign up
            </NavLink>
          </div>
        </article>
      </article>
    </div>
  );
};
export default Nav;
