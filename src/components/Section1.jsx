import { useState } from "react";
import jobs from "../constants/Jobs";
import LibraryButton from "./LibraryButton"
import LibraryButton2 from "./LibraryButton2"
import ux from "../icons/lapiz.png";
import clock from "../icons/time-and-date.png";

function Section1() {

  const [useFilter, setFilter] = useState("UIUX");
  // const filteredJobs = useFilter === "all" ? jobs : jobs.filter(job => job.category === useFilter);



  const filteredJobs = jobs.filter(job => job.category === useFilter);

  return (
    <>
      <div className="w-full h-screen bg-white text-black">
        <div className="topPart py-16">
          <div className="flex justify-center">
            <div className="grid">
              <h3 className="flex justify-center text-2xl font-bold">Services</h3>
              <h4 className="flex justify-center text-center text-gray-500">we provide several services that will help you find your ideal job <br /> feel free to search through all of our available jobs we've got for you</h4>
              <div className="buttons flex justify-center gap-5">
                <div className="flex border-b-2 border-purple-500 items-center gap-0.5 text-purple-500">
                <img src={ux} alt="" className="size-4" />
                <button className="" onClick={() =>{setFilter("UIUX")}}>UI/UX Design</button>
                </div>
                <button className="border-b-2 border-transparent hover:border-purple-500 ease-in-out duration-300" onClick={() =>{setFilter("Software")}}>Software</button>
                <button className="border-b-2 border-transparent hover:border-purple-500 ease-in-out duration-300" onClick={() =>{setFilter("Art")}}>Art</button>
                <button className="border-b-2 border-transparent hover:border-purple-500 ease-in-out duration-300" onClick={() =>{setFilter("Ingeniery")}}>Ingeniery</button>
              </div>
            </div>
          </div>
        </div>

        <div className="middlePart flex">
          <div className="card p-5 border-2 border-gray-200 shadow-md rounded-md max-w-xs mx-5">

            <div className="img">
            <img src="https://risk2solution.com/wp-content/uploads/2021/10/Creating-Fantastic-Digital-Experiences.jpg" alt="" className="h-40 w-full rounded-md shadow-md mb-3" />
            </div>

              <div className="profileAndCategory flex gap-1 items-center mt-2 mb-2">
                  <img src="https://i.pinimg.com/736x/1c/05/b0/1c05b0c2faae165276b38c1c0482c080.jpg" alt="" className="size-10 rounded-full object-cover" />
                  <h3 className="text-gray-500">Eleazar Moreta</h3>
                  <div className="flex ml-14 items-center text-white bg-purple-500 p-1 rounded-sm">
                  <img src={ux} alt="" className="size-4 invert" />
                  <h3 className="">UI/UX</h3>
                  </div>
              </div>

              <div className="jobName">
                <p className="mb-3">UI/UX Designer At Microsoft Corporation, Come Work With Us!</p>
              </div>


              <div className="duration flex">
              <img src={clock} alt="" className="size-6" draggable="false" />
                <h3 className="text-purple-400 mb-2">8 Hours / 5 Days</h3>
              </div>

              <div className="buttonToGo">
              <LibraryButton/>
              </div>

          </div>
          <LibraryButton2/>
        </div>






      </div>
    </>
  );
}

export default Section1;
