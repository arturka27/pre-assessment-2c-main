import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../app/AppContext";
import './HeaderPage.css'
function HeaderPage() {
  const { user, categories } = useContext(AppContext);

  return (
    <div className="header">
      {user ? (
        <div>
          <h2>Hi {user.name}!</h2>
          <button>
            {" "}
            <NavLink to="/logout">Logout</NavLink>
          </button>
        </div>
      ) : (
        <div>
          <button>
            <NavLink className="navlink" to="/authorization">
              Login
            </NavLink>
          </button>
          <button>
            <NavLink className="navlink" to="/registration">
              Registration
            </NavLink>
          </button>
        </div>
      )}
    </div>
  );
}

export default HeaderPage;
