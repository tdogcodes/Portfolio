import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import grainImage from "@/assets/images/grain.jpg";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return <section className="pb-16 lg:py-24 ">
    <div className="container">
     <SectionHeader title="Real World Projects" eyebrow="I turn ideas into real world solutions" description="Here's what I've been working on"/>
      <div className="flex flex-col gap-5">
        {portfolioProjects.map(project => (
          <div key={project.title} className="z-0 overflow-hidden after:z-10 mt-12 flex flex-col align-center
           bg-gray-800 rounded-3xl relative after:content-[''] after:absolute after:inset-0 after:outline-2 
           after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 md:pt-12 md:px-10 px-8 after:pointer-events-none"> 
                <div className="absolute inset-0 opacity-5 -z-10" style={{ backgroundImage: `url(${grainImage.src})`}}></div> 
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex 
                gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text p-2 mt-4">
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
              </div>   
            <h3 className="font-serif text-2xl mt-2 md:text-4xl">{project.title}</h3>
            <hr className="border-t-2 border-white/10 mt-4"/>
            <ul className=" flex flex-col gap-4 mt-4 md:mt-5">
              {project.results.map((result) => (
                <li key={result.title}className="flex gap-2 text-sm md:text-base text-white/50">
                  <CheckCircleIcon className="size-5 md:size-6"/>
                  <span className="">{result.title}</span>
                </li>
                ))}
            </ul>
            <a href={project.link} className="block mx-auto w-full md:w-auto sm:w-auto ">
              <button className="bg-blue-900 text-white h-12 md:w-auto rounded-xl lg:mt-3
                hover:bg-white border border-white/15 hover:text-black transition duration-500 z-20 md:px-4 font-semibold inline-flex items-center px-3 justify-around gap-2m-auto mt-8">
                <span className="">Visit live site</span>
                <ArrowUpRight className="size-4"/>
              </button>
            </a>
            <Image src={project.image} alt={project.title} className="mt-8 -mb-4 lg:mt-4 lg:mx-auto lg:max-w-[90%] w-auto h-auto object-contain" />
          </div>
        ))}
      </div>
    </div>
  </section>;
};
