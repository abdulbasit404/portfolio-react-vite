import React from "react";
import { Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Cards from "./cards";
import About from "./About";
import CarImage from "../assets/images/car-image.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Home() {
  return (
    <>
      <Navbar />
      <div class=" bg-gray-200 flex flex-col justify-center items-center p-5">
        <Cards />
      </div>
      <About />
    </>
  );
}

export default Home;
