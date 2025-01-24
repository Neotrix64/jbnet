import React from "react";
import Spline from "@splinetool/react-spline";
import NavBar from "./NavBar";
import HeroBottom from "./HeroBottom";

export default function HeroSection() {
  return (
    <>
      <NavBar />
      <div className="relative bg-gray-900 text-white min-h-screen flex items-center">
        {/* Contenido Izquierdo */}
        <div className="max-w-2xl px-8 space-y-6">
          <h1 className="text-3xl font-bold leading-tight ml-5">
            Empowering your career journey – connect, discover, and land your
            dream job with ease.
          </h1>
          <p className="text-md text-gray-300 ml-5">
            Browse endless job opportunities, network with industry
            professionals, and build a standout profile to unlock your career
            potential. We're here to help you every step of the way!
          </p>
          <div className="relative flex items-center ml-5">
            <input
              type="text"
              className="w-3/4 p-4 rounded-full text-black text-xl"
              placeholder="Search your next opportunity..."
            />
            <button className="absolute bg-blue-600 p-4 rounded-full left-96 font-bold">
              Go
            </button>
          </div>

          <div className="flex gap-5 ml-5">
            <button className="px-16 py-3 bg-blue-600 hover:bg-blue-700 hover:scale-110 ease-in-out duration-300  rounded-full font-semibold text-lg transition">
              Contact Us!
            </button>
            <button className="px-16 py-3 bg-white hover:scale-110 ease-in-out duration-300 rounded-full font-semibold text-lg transition text-black">
              Register
            </button>
          </div>
        </div>

        {/* Modelo Spline */}
        <div className="absolute right-0 top-0 bottom-0 w-full hidden lg:w-1/2 lg:block">
          <Spline scene="https://prod.spline.design/BnaCL7bWNBE3Gx3i/scene.splinecode" />
        </div>
      </div>
      <HeroBottom />
    </>
  );
}
