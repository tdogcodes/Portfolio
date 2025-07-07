"use client";
import Prescripto from "@/assets/images/prescripto/prescriptoPic.png";
import PrescriptoDocs from "@/assets/images/prescripto/prescriptoDocs.png";
import PrescriptoAppt from "@/assets/images/prescripto/prescriptoAppt.png";
import PrescriptoUserAppt from "@/assets/images/prescripto/prescriptoUserAppt.png";
import LayersLanding from "@/assets/images/layers/layersland.jpg";
import LayersFeat from "@/assets/images/layers/layersfeat.jpg";
import LayersInt from "@/assets/images/layers/layersint.jpg";
import LayersFaq from "@/assets/images/layers/layersfaq.jpg";
import LayersText from "@/assets/images/layers/layerstext.jpg";
import FormlyAI from "@/assets/images/formly/formlyai.jpg";
import FormlyLanding from "@/assets/images/formly/formlyland.png";
import FormlyDash from "@/assets/images/formly/formlydash.jpg";
import FormlyRes from "@/assets/images/formly/formlyres.jpg";
import FormlySS from "@/assets/images/formly/formlyss.jpg";
import FormStats from "@/assets/images/formly/formstats.jpg";
import WebChatHome from "@/assets/images/webchat/webchatHome.png";
import WebChatChat from "@/assets/images/webchat/webchatChat.png";
import Gameplay2048 from "@/assets/images/2048/2048Game.png";
import Home2048 from "@/assets/images/2048/2048Home.png";
import Features2048 from "@/assets/images/2048/2048Features.png";
import Footer2048 from "@/assets/images/2048/2048Footer.png";
import Rules2048 from "@/assets/images/2048/2048Guide.png";
import RefineDash from "@/assets/images/refine/refineDash.png";
import RefineBus from "@/assets/images/refine/refineBus.png";
import RefineBoard from "@/assets/images/refine/refineBoard.png";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import GithubIcon from "@/assets/icons/github.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { useInView, motion } from "framer-motion";
import { useRef, useState } from "react";
import React from "react";
import Carousel from "@/components/Carousel";
import LoadMore from "@/components/loadMore/LoadMore";

const portfolioProjects = [
  {
    company: "Formly",
    year: "2025",
    title: "Shareable Form Builder with Drag and Drop & AI ",
    results: [
      {
        title:
          "Create forms with drag and drop blocks, or use AI to create a form that you can share with a link, and track responses.",
      },
      {
        title:
          "Built with Next.js, Tailwind CSS, React DnD, and Google Gemini API. The backend uses PostgreSQL, Prisma & Neon.",
      },
    ],
    link: "https://formly-henna.vercel.app",
    code: "https://github.com/tdogcodes/Formly",
    images: [
      {
        id: 0,
        imageSrc: FormlyLanding,
      },
      {
        id: 1,
        imageSrc: FormlyDash,
      },
      {
        id: 2,
        imageSrc: FormlyAI,
      },
      {
        id: 3,
        imageSrc: FormlyRes,
      },
      {
        id: 4,
        imageSrc: FormlySS,
      },
      {
        id: 5,
        imageSrc: FormStats,
      },
    ],
  },
  {
    company: "2048 Tile Merging Game",
    year: "2025",
    title: "2048 Tile Merging Game & Animated Landing Page",
    results: [
      {
        title:
          "The game itself is made with only JavaScript, HTML, and CSS. no third party libraries or frameworks used.",
      },
      {
        title:
          "The landing page was made with React, Tailwind, and Framer Motion. It features animations and a responsive design.",
      },
    ],
    link: "https://2048-landing-page.vercel.app",
    code: "https://github.com/tdogcodes/Javascript-2048-Game",
    images: [
      {
        id: 0,
        imageSrc: Home2048,
      },
       {
        id: 1,
        imageSrc: Gameplay2048,
      },
      {
        id: 2,
        imageSrc: Features2048,
      },
      {
        id: 3,
        imageSrc: Footer2048,
      },
      {
        id: 4,
        imageSrc: Rules2048,
      },
    ],
  },
  {
    company: "Layers.to",
    year: "2025",
    title: "Landing Page for Web Design platform",
    results: [
      {
        title:
          "Built a Next.js landing page with TypeScript for Layers, a design platform to share work and mock-ups.",
      },
      {
        title:
          "User interactivity and web accessibility features, styled with Tailwind, CVA, & Framer Motion for animations.",
      },
    ],
    link: "https://layers-design.vercel.app",
    code: "https://github.com/tdogcodes/Layers-Landing-Page",
    images: [
      {
        id: 0,
        imageSrc: LayersLanding,
      },
      {
        id: 1,
        imageSrc: LayersFeat,
      },
      {
        id: 2,
        imageSrc: LayersInt,
      },
      {
        id: 3,
        imageSrc: LayersFaq,
      },
      {
        id: 4,
        imageSrc: LayersText,
      },
    ],
  },
  {
    company: "Refine Kanban",
    year: "2025",
    title: "Frontend for Project Management CRM",
    results: [
      {
        title:
          "Developed the frontend for a project management CRM with a kanban board, graphs, & pipelines to track deals.",
      },
      {
        title:
          "The site was made with Refine, Typescript, and styled with Ant Design, and uses mock data from a GraphQL endpoint.",
      },
    ],
    link: "https://prescripto-healthcare.vercel.app",
    code: "https://github.com/tdogcodes/Prescripto-Healthcare",
    images: [
      {
        id: 0,
        imageSrc: RefineBoard,
      },
      {
        id: 1,
        imageSrc: RefineDash,
      },
      {
        id: 2,
        imageSrc: RefineBus,
      },
    ],
  },
  {
    company: "Prescripto",
    year: "2024",
    title: "Frontend for Doctor Appointment Scheduling",
    results: [
      {
        title:
          "Developed a responsive React frontend for a healthcare platform, patients can schedule and manage appointments.",
      },
      {
        title:
          "Implemented the design from Figma, made with Vite and React Router, and styled with Tailwind.",
      },
    ],
    link: "https://prescripto-healthcare.vercel.app",
    code: "https://github.com/tdogcodes/Prescripto-Healthcare",
    images: [
      {
        id: 0,
        imageSrc: Prescripto,
      },
      {
        id: 1,
        imageSrc: PrescriptoDocs,
      },
      {
        id: 2,
        imageSrc: PrescriptoAppt,
      },
      {
        id: 3,
        imageSrc: PrescriptoUserAppt,
      },
    ],
  },
  {
    company: "WebChat",
    year: "2024",
    title: "Realtime Chat App with React and Firebase",
    results: [
      {
        title:
          "Created a full-stack real-time chat app with React and Firebase, allowing users to log in, connect, and chat securely.",
      },
      {
        title:
          "Manages user data with Zustand and stores it in Firestore, uses Firebase Auth, and styled with Sass CSS.",
      },
    ],
    link: "https://akasha-terminal.vercel.app",
    code: "https://github.com/tdogcodes/Genshin-Impact-Messenging",
    images: [
      {
        id: 0,
        imageSrc: WebChatHome,
      },
      {
        id: 1,
        imageSrc: WebChatChat,
      },
    ],
  },
];

export const ProjectsSection = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  const loadMoreRef = useRef(null);

  const loadMoreInView = useInView(loadMoreRef, { once: true });

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev +2);
  };

  return (
    <section id="projects" className="pb-16 lg:py-24 pt-16">
      <div className="flex flex-col sm:mx-10 md:mx-36 lg:mx-24">
        <SectionHeader title="Personal Projects" eyebrow="" description="" />

        <div className="flex flex-col lg:flex-row gap-5 lg:justify-center lg:flex-wrap overflow-hidden">
          {portfolioProjects.slice(0, visibleCount).map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>

        {visibleCount < portfolioProjects.length && (
          <motion.div
            onClick={handleLoadMore}
            ref={loadMoreRef}
            initial={{ opacity: 0, y: 50 }}
            animate={loadMoreInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="flex justify-center mt-10"
          >
            <LoadMore outerStyle=" w-[14em]" />
          </motion.div>
        )}
      </div>
    </section>
  );
};

type Project = (typeof portfolioProjects)[number];

//the ProjectCard component is used to display each project in the portfolio
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const ref = useRef(null);

  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      className="z-0 overflow-hidden lg:w-[600px] after:z-10 mt-12 pb-10 sm:pb-0 flex flex-col align-center

bg-gray-800 rounded-3xl relative after:content-[''] after:absolute after:inset-0 after:outline-2

after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 md:pt-12 md:px-10

px-8 after:pointer-events-none lg:pb-10"
    >
      <div
        className="absolute inset-0 opacity-5 -z-10"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>

      <div
        className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex

gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text p-2 mt-4"
      >
        <span>{project.company}</span>

        <span>&bull;</span>

        <span>{project.year}</span>
      </div>

      <h3 className="font-serif text-2xl mt-2 md:text-4xl">{project.title}</h3>

      <hr className="border-t-2 border-white/10 mt-4" />

      <ul className=" flex lg:h-[50%] flex-col gap-4 mt-4 md:mt-5">
        {project.results.map((result) => (
          <li
            key={result.title}
            className="flex gap-2 text-sm md:text-base text-white/50"
          >
            <CheckCircleIcon className=" lg:min-w-5 size-5 md:size-6" />

            <span className="">{result.title}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-col">
        <div className="flex text-center justify-center gap-3 mb-0 sm:mb-6 md:gap-4">
          <a
            href={project.link}
            className="w-full  z-20 md:w-auto sm:w-auto"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className=" h-12 md:w-auto rounded-xl lg:mt-3 pretty-btn

z-20 md:px-4 font-semibold inline-flex items-center px-2 justify-around gap-2 m-auto mt-8"
            >
              <span className="sm:text-sm md:text-base">Visit Site</span>

              <ArrowUpRight className="md:size-5 md:block hidden" />
            </button>
          </a>

          <a
            href={project.code}
            className="w-full z-20 md:w-auto sm:w-auto"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className=" h-12 md:w-auto rounded-xl lg:mt-3 pretty-btn

z-20 md:px-4 font-semibold inline-flex items-center px-2 justify-around gap-2 m-auto mt-8"
            >
              <span className="sm:text-sm md:text-base">View Code</span>

              <GithubIcon className="size-5 md:block hidden" />
            </button>
          </a>
        </div>

        <Carousel
          images={project.images.map((image: any) => ({
            ...image,

            imageSrc: image.imageSrc.src,
          }))}
        />
      </div>
    </motion.div>
  );
};
