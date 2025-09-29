import React, { useState } from "react";
// import Button from "@mui/material/Button";
import "../App.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div class="bg-black flex justify-around items-center">
        <div class="flex justify-center items-center p-2">
          <h1 class="text-4xl text-amber-700 font-bold">Portfolio</h1>
        </div>
        <div>
          <div class="sm:flex hidden">
            <ul class="flex gap-10 text-lg">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "inactive-link"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "inactive-link"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "inactive-link"
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "inactive-link"
                  }
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
          <div class="flex sm:hidden ">
            {menuOpen ? (
              <CloseIcon
                style={{
                  fontSize: "35px",
                  color: "#b45309",
                  cursor: "pointer",
                }}
                onClick={() => setMenuOpen(false)}
              />
            ) : (
              <MenuIcon
                style={{
                  fontSize: "35px",
                  color: "#b45309",
                  cursor: "pointer",
                }}
                onClick={() => setMenuOpen(true)}
              />
            )}
          </div>
        </div>
      </div>
      {menuOpen && (
        <div class="bg-black sm:hidden">
          <ul class="flex flex-col items-center gap-5 p-5 text-lg">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "responsive-active-link"
                    : "responsive-inactive-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "responsive-active-link"
                    : "responsive-inactive-link"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "responsive-active-link"
                    : "responsive-inactive-link"
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? "responsive-active-link"
                    : "responsive-inactive-link"
                }
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
