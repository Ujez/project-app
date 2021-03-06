import React from "react";
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";
import WebDev from "../components/typed";

import bgImg from "../assets/webdev.png";

const Hero = () => {
  return (
    <div
      name="home"
      className="py-12 w-full h-screen bg-zinc-200 flex flex-col justify-between"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
            <div className="flex flex-col justify-center md:items-start w-full px-2 py-8 mt-6 sm:my-6 items-center">
            <p className="lg:text-3xl md:text-2xl sm:text-xl ">
                Unique Sequencing & Production
            </p>
            <div className="py-2 text-5xl md:text-5xl sm:text-5xl smaller:text-xl smaller:break-words font-bold">
                <WebDev />
            </div>

            <p className="lg:text-3xl md:text-2xl sm:text-xl">
                This is our Tech brand.
            </p>
            <button className="py-3 px-6 sm:w-[60%] my-4 btn-primary">Get Started</button>
            </div>
        <div>
          <img className="lg:w-full sm:w-3/4  sm:items-center smaller:items-center smaller:w-0" src={bgImg} alt="/" />
        </div>
        <div
          className=" absolute flex flex-col py-8 md:min-w-[880px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl smaller:hidden"
        >
          <p>Web Services</p>
          <div className="flex justify-between flex-wrap px-4">
            <p className="flex px-4 py-2 text-slate-500">
              <CloudUploadIcon className="h-6 text-indigo-600" /> Web Security
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <DatabaseIcon className="h-6 text-indigo-600" /> Database
              Management
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <ServerIcon className="h-6 text-indigo-600" /> Cloud Data
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <PaperAirplaneIcon className="h-6 text-indigo-600" /> API
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
