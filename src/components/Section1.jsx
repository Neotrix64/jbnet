import { useState } from "react";
import jobs from "../constants/Jobs";
import LibraryButton from "./LibraryButton";
import LibraryButton2 from "./LibraryButton2";
import ux from "../icons/lapiz.png";
import clock from "../icons/time-and-date.png";
import React from "react";

function Section1() {
  const [useFilter, setFilter] = useState("UI/UX");
  // const filteredJobs = useFilter === "all" ? jobs : jobs.filter(job => job.category === useFilter);

  const filteredJobs = jobs.filter((job) => job.category === useFilter);
  console.log(filteredJobs);

  return (
    <>
      <div className="w-full h-screen bg-white text-black">
        <div className="topPart py-16">
          <div className="flex justify-center">
            <div className="grid">
              <h3 className="flex justify-center text-2xl font-bold">
                Services
              </h3>
              <h4 className="flex justify-center text-center text-gray-500">
                we provide several services that will help you find your ideal
                job <br /> feel free to search through all of our available jobs
                we've got for you
              </h4>
              <div className="buttons flex justify-center gap-5">
                <div className={`flex border-b-2 hover:border-purple-500 items-center gap-0.5 ease-in-out duration-300 ${useFilter == "UI/UX" ? 'border-purple-500 text-purple-500' : 'text-black border-transparent'}`}>
                  <img src={ux} alt="" className="size-4" />
                  <button
                    className=""
                    onClick={() => {
                      setFilter("UI/UX");
                    }}
                  >
                    UI/UX Design
                  </button>
                </div>
                <div className={`flex border-b-2 hover:border-purple-500 items-center gap-0.5 ease-in-out duration-300 ${useFilter == "Software" ? 'border-purple-500 text-purple-500' : 'text-black border-transparent'}`}>
                  <img src={ux} alt="" className="size-4" />
                  <button
                    className=""
                    onClick={() => {
                      setFilter("Software");
                    }}
                  >
                    Software
                  </button>
                </div>
                <div className={`flex border-b-2 hover:border-purple-500 items-center gap-0.5 ease-in-out duration-300 ${useFilter == "Art" ? 'border-purple-500 text-purple-500' : 'text-black border-transparent'}`}>
                  <img src={ux} alt="" className="size-4" />
                  <button
                    className=""
                    onClick={() => {
                      setFilter("Art");
                    }}
                  >
                    Art
                  </button>
                </div>
                <div className={`flex border-b-2 hover:border-purple-500 items-center gap-0.5 ease-in-out duration-300 ${useFilter == "Engineering" ? 'border-purple-500 text-purple-500' : 'text-black border-transparent'}`}>
                  <img src={ux} alt="" className="size-4" />
                  <button
                    className=""
                    onClick={() => {
                      setFilter("Engineering");
                    }}
                  >
                    Engineering
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="flex">
        {filteredJobs.map((job) => {
          return (
            
            <div key={job.id}>
              <div className="middlePart h-full">
                <div className="card pb-16 border-2 border-gray-200 shadow-md rounded-md max-w-xs mx-5 h-full px-0">
                  <div className="img">
                    <img
                      src="https://risk2solution.com/wp-content/uploads/2021/10/Creating-Fantastic-Digital-Experiences.jpg"
                      alt=""
                      className="h-40 w-full rounded-md shadow-md mb-3"
                    />
                  </div>
                  <div className="profileAndCategory flex items-center mt-2 mb-2">
                    <img
                      src="https://i.pinimg.com/736x/1c/05/b0/1c05b0c2faae165276b38c1c0482c080.jpg"
                      alt=""
                      className="size-10 rounded-full object-cover"
                    />
                    <h3 className="text-gray-500">{job.userName}</h3>
                    <div className="flex items-center text-white bg-purple-500 p-1 rounded-sm">
                      <img src={ux} alt="" className="size-4 invert" />
                      <h3 className="">{job.category}</h3>
                    </div>

                  </div>

                  <div className="jobName">
                    <p className="mb-3">
                      {job.name}
                    </p>
                  </div>

                  <div className="duration flex">
                    <img
                      src={clock}
                      alt=""
                      className="size-6"
                      draggable="false"
                    />
                    <h3 className="text-purple-400 mb-2">{job.time}</h3>
                  </div>

                  <div className="buttonToGo bottom-0">
                    <LibraryButton />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        </div>

        <div className="flex justify-center w-full mt-5"><LibraryButton2/></div>
      </div>
    </>
  );
}

export default Section1;
