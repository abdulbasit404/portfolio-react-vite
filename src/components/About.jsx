import React, { useState } from "react";
import Navbar from "./Navbar";
import TabsButton from "./TabsButton";
import CarImage from "../assets/images/car-image.png";
import TabImage1 from "../assets/images/tab-image-1.png";
import TabImage2 from "../assets/images/tab-image-2.png";
import TabImage3 from "../assets/images/tab-image-3.png";
import TabImage4 from "../assets/images/tab-image-4.png";
import TabImage5 from "../assets/images/tab-image-5.png";

function About() {
  const [toggle, setToggle] = useState(1);
  function updateToggle(id) {
    setToggle(id);
  }
  return (
    <>
      {/* <Navbar />  */}
      <div class="bg-black min-h-screen flex flex-col justify-center items-center p-5 box-border">
        <div class="container mx-auto flex flex-col gap-5">
          <h1 class="text-center text-4xl font-bold text-zinc-200 mb-5">
            Our Services
          </h1>
          <div class=" w-[100%] flex flex-wrap justify-center gap-5 items-center ">
            <TabsButton
              title="services design"
              onClick={() => updateToggle(1)}
              active={toggle === 1}
            />
            <TabsButton
              title="innovation"
              onClick={() => updateToggle(2)}
              active={toggle === 2}
            />
            <TabsButton
              title="ux & digital"
              onClick={() => updateToggle(3)}
              active={toggle === 3}
            />
            <TabsButton
              title="art studio"
              onClick={() => updateToggle(4)}
              active={toggle === 4}
            />
            <TabsButton
              title="events"
              onClick={() => updateToggle(5)}
              active={toggle === 5}
            />
          </div>
          {toggle === 1 ? (
            <div class=" flex flex-col justify-center items-center sm:flex-row gap-2">
              <p class="text-white text-lg sm:text-2xl   ">
                Memorable experiences that bring your brand to life. we design
                and manage events from concept to execution. every detail counts
                and we handle them all.
              </p>
              <img src={TabImage1} alt="" class="w-[300px] sm:w-[350px]" />
            </div>
          ) : null}
          {toggle === 2 ? (
            <div class=" gap-2 flex flex-col justify-center items-center sm:flex-row ">
              <p class="text-white text-lg sm:text-2xl">
                Our studio blends creativity with visual storytelling. from
                illustrations to motion design, we do it all. where imagination
                turns into impact.
              </p>
              <img src={TabImage2} alt="" class="w-[300px] sm:w-[350px]" />
            </div>
          ) : null}
          {toggle === 3 ? (
            <div class=" gap-5 flex flex-col justify-center items-center sm:flex-row">
              <p class="text-white text-lg sm:text-2xl">
                Innovation is at the core of what we do. we bring bold ideas to
                life with speed and agility. let’s co-create the future
                together.
              </p>
              <img src={TabImage3} alt="" class="w-[300px] sm:w-[350px]" />
            </div>
          ) : null}
          {toggle === 4 ? (
            <div class="gap-2 flex flex-col justify-center items-center sm:flex-row ">
              <p class="text-white text-lg sm:text-2xl">
                We craft thoughtful service experiences for your users. our
                process is human centered and business driven. design that
                bridges strategy with execution.
              </p>
              <img src={TabImage4} alt="" class="w-[300px] sm:w-[350px]" />
            </div>
          ) : null}
          {toggle === 5 ? (
            <div class="gap-2 flex flex-col justify-center items-center sm:flex-row ">
              <p class="text-white text-lg sm:text-2xl">
                User experience is more than just good design. We create
                intuitive interfaces that connect emotionally. Digital solutions
                that your users will love.
              </p>
              <img src={TabImage5} alt="" class="w-[300px] sm:w-[350px]" />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default About;
