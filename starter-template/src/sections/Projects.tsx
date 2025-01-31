import Game from "@/assets/images/2048.png";
import PortfolioPage from "@/assets/images/portfolio.png";
import AkashaPage from "@/assets/images/akashaSS.png";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import grainImage from "@/assets/images/grain.jpg";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";

const portfolioProjects = [
  {
    company: "Tdog's 2048",
    year: "2024",
    title: "2048 Tile Merging Game",
    results: [
      { title: "HTML structured UI" },
      { title: "CSS styling & smooth tile merging animations" },
      { title: "Javascript components for tiles, game board, and user controls" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: Game,
  },
  {
    company: "Akasha Terminal",
    year: "2024",
    title: "Realtime Chat App for Genshin Impact",
    results: [
      { title: "React & CSS implemented frontend" },
      { title: "Integrated Firebase Database, Firestore, and Firebase Authentication APIs" },
      { title: "Zustand for managing user data as global state" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: AkashaPage,
  },
  {
    company: "Tracy's Portfolio Page",
    year: "2025",
    title: "This Portfolio",
    results: [
      { title: "Lazy Loading, SSR & Image Optimization with Next.js" },
      { title: "Styled components & animations using Tailwind CSS" },
      { title: "Created type safe components with Typescript" },
    ],
    link: "#",
    image: PortfolioPage,
  },
];

export const ProjectsSection = () => {
  return <section id="projects" className="pb-16 lg:py-24 pt-16">
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
            <Image src={project.image} alt={project.title} className="mt-8 -mb-4 lg:mt-4 lg:mx-auto lg:max-w-[90%] w-auto h-auto object-contain border border-white/20 rounded-3xl" />
          </div>
        ))}
      </div>
    </div>
  </section>;
};
