import { SectionHeader } from "@/components/SectionHeader";
import grainImage from "@/assets/images/grain.jpg";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import GungHoLogo from "@/assets/images/workExperience/GungHo_Horizontal_ColorW.png";
import GunghoSite from "@/assets/images/workExperience/Capture.jpg";
import React from "react";
import Image from "next/image";

const WorkSection = () => {
  const workExperience = [
    {
      company: "GungHo Online Entertainment",
      year: "2024",
      title: "Web Developer",
      logo: GungHoLogo,
      image: GunghoSite,
      results: [
        {
          title:
            "Built frontend with Vite, TypeScript, and CSS. Developed backend with Firebase for a blog content management system.",
        },
        {
          title:
            "Collaborated in a remote Agile team, incorporating feedback from product managers, developers, and designers to improve the site.",
        },
        {
          title:
            "Implemented responsive design and optimized performance, improving page load speed and mobile usability.",
        },
      ],
    },
  ];

  return (
    <section id="work" className="pb-16 lg:py-24 pt-16">
      <div className="flex flex-col sm:mx-10 md:mx-36 lg:mx-24">
        <SectionHeader title="Work Experience" eyebrow="" description="" />
        <div className="flex flex-col lg:flex-row gap-5 lg:justify-center lg:flex-wrap overflow-hidden">
          {workExperience.map((job, i) => (
            <div
              key={i}
              className="z-0 overflow-hidden m-auto lg:w-[900px] after:z-10 mt-12 flex flex-col align-center
                         bg-gray-800 rounded-3xl relative after:content-[''] after:absolute after:inset-0 after:outline-2
                         after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 md:pt-6 md:px-10
                          px-8 after:pointer-events-none pb-10"
            >
              <div
                className="absolute inset-0 opacity-5 -z-10"
                style={{ backgroundImage: `url(${grainImage.src})` }}
              />
              <div
                className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex 
                    gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text p-2 mt-4"
              >
                <span>{job.company}</span>
                <span>&bull;</span>
                <span>{job.year}</span>
              </div>
              <div className="flex gap-2 md:gap-4 items-center justify-center mt-2">
                <h3 className="font-serif text-3xl flex flex-nowrap md:text-4xl">
                  {job.title}
                </h3>
                <h3 className="font-serif text-2xl flex text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-sky-400 flex-nowrap md:text-4xl">
                  {"-"}
                </h3>
                <Image
                  alt="GungHo logo"
                  style={{ zIndex: 10, margin: "0px" }}
                  src={job.logo}
                  className="w-[150px]  md:w-[200px]"
                />
              </div>
              <hr className="border-t-2 border-white/10 mt-4" />
              <ul className="flex m-auto py-4 lg:h-[50%] flex-col md:flex-row gap-4 mt-4 md:mt-5">
                {job.results.map((result) => (
                  <li
                    key={result.title}
                    className="flex gap-2 text-sm md:text-base text-white/50"
                  >
                    <CheckCircleIcon className=" lg:min-w-5 size-5 md:size-6" />
                    <span className="">{result.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
