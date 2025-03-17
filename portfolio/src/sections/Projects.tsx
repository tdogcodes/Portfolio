import Prescripto from "@/assets/images/prescriptoPic.png";
import LayersLanding from "@/assets/images/layersPic.png";
import Sumz from "@/assets/images/aisumz.png";
import AkashaPage from "@/assets/images/akashaSS.png";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import GithubIcon from "@/assets/icons/github.svg";
import grainImage from "@/assets/images/grain.jpg";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";

const portfolioProjects = [
  {
    company: "Prescripto",
    year: "2025",
    title: "Healthcare Platform for Doctors and Patients",
    results: [
      { title: "Created with React, Tailwind, & React Router" },
      { title: "Implemented doctor appointment scheduling " },
      { title: "Used Figma design to create the specified UI" },
    ],
    link: "https://prescripto-healthcare.vercel.app",
    code: "https://github.com/tdogcodes/Prescripto-Healthcare",
    image: Prescripto,
  },
  {
    company: "Layers.to",
    year: "2025",
    title: "Landing Page for Web Design platform",
    results: [
      { title: "Made with Next.js, used semantic HTML & image optimization " },
      { title: "Styled responsive UI & animations using Tailwind CSS & Framer Motion" },
      { title: "Created type safe components & functions with Typescript" },
    ],
    link: "https://layers-design.vercel.app",
    code: "https://github.com/tdogcodes/Layers-Landing-Page",
    image: LayersLanding,
  },
  {
    company: "Akasha Terminal",
    year: "2024",
    title: "Realtime Chat App for Genshin Impact",
    results: [
      { title: "Created reuseable components using React, JS and CSS" },
      { title: "CRUD operations to Firebase Database, Firestore, and Firebase Authentication APIs" },
      { title: "Zustand for managing user data as global state" },
    ],
    link: "https://akasha-terminal.vercel.app",
    code: "https://github.com/tdogcodes/Genshin-Impact-Messenging",
    image: AkashaPage,
  },
  {
    company: "Sumz AI",
    year: "2025",
    title: "GPT-4o Website URL Summarizer",
    results: [
      { title: "Made with React, Tailwind, and Redux Toolkit" },
      { title: "Uses the Article Extractor and Summarizer API from RapidAPI" },
      { title: "Give Sumz any link to get a concise summary of the content" },
    ],
    link: "https://sumz-ai-git-main-tracys-projects-b4f84f1c.vercel.app",
    code: "https://github.com/tdogcodes/sumz-ai",
    image: Sumz,
  },
];

export const ProjectsSection = () => {
  return <section id="projects" className="pb-16 lg:py-24 pt-16">
    <div className="flex flex-col sm:mx-10 md:mx-36 lg:mx-24">
     <SectionHeader title="Real World Projects" eyebrow="Here's what I've worked on" description=""/>
      <div className="flex flex-col lg:flex-row gap-5 lg:justify-center lg:flex-wrap overflow-hidden">
        {portfolioProjects.map(project => (
          <div key={project.title} className="z-0 overflow-hidden lg:w-[600px] after:z-10 mt-12 flex flex-col align-center
           bg-gray-800 rounded-3xl relative after:content-[''] after:absolute after:inset-0 after:outline-2
           after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 md:pt-12 md:px-10
            px-8 after:pointer-events-none lg:pb-10"> 
                <div className="absolute inset-0 opacity-5 -z-10" style={{ backgroundImage: `url(${grainImage.src})`}}></div> 
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex 
                gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text p-2 mt-4">
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
              </div>   
            <h3 className="font-serif text-2xl mt-2 md:text-4xl">{project.title}</h3>
            <hr className="border-t-2 border-white/10 mt-4"/>
            <ul className=" flex lg:h-[50%] flex-col gap-4 mt-4 md:mt-5">
              {project.results.map((result) => (
                <li key={result.title}className="flex gap-2 text-sm md:text-base text-white/50">
                  <CheckCircleIcon className=" lg:min-w-5 size-5 md:size-6"/>
                  <span className="">{result.title}</span>
                </li>
                ))}
            </ul>
           <div className="flex flex-col">
              <div className="flex flex-row max-sm:flex-col text-center justify-center md:gap-4">
                <a href={project.link} className="w-full md:w-auto sm:w-auto "
                target={"_blank" + "_self"} rel={"noopener noreferrer" + undefined}>
                  <button className=" h-12 md:w-auto rounded-xl lg:mt-3 pretty-btn
                    z-20 md:px-4 font-semibold inline-flex items-center px-3 justify-around gap-2 m-auto mt-8">
                    <span>Visit Site</span>
                    <ArrowUpRight className="md:size-5 md:block sm:size-0"/>
                  </button>
                </a>
                <a href={project.code} className="w-full md:w-auto sm:w-auto "
                target={"_blank" + "_self"} rel={"noopener noreferrer" + undefined}>
                  <button className=" h-12 md:w-auto rounded-xl lg:mt-3 pretty-btn
                    z-20 md:px-4 font-semibold inline-flex items-center px-3 justify-around gap-2 m-auto mt-8">
                    <span>View Code</span>
                    <GithubIcon className="size-5 md:block sm:hidden"/>
                  </button>
                </a>
              </div>
              <Image src={project.image} alt={project.title} className="mt-8 -mb-4 lg:mt-4 lg:mx-auto lg:max-w-[90%] w-auto h-auto object-contain border border-white/20 rounded-3xl" />
           </div>
          </div>
        ))}
      </div>
    </div>
  </section>;
};
