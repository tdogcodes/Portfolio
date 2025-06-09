"use client";
import Prescripto from "@/assets/images/prescripto/prescriptoPic.png";
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
import AkashaPage from "@/assets/images/akasha/akashaSS.png";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import GithubIcon from "@/assets/icons/github.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
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
          "Create forms with drag and drop blocks, or use AI to create a form that you can share with a link, and track responses",
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
    company: "Layers.to",
    year: "2025",
    title: "Landing Page for Web Design platform",
    results: [
      {
        title:
          "Built a Next.js landing page with TypeScript for Layers, a design platform to share work and mock-ups",
      },
      {
        title:
          "User interactivity and web accessibility features, styled with Tailwind, CVA, & Framer Motion for animations",
      },
    ],
    link: "https://layers-design.vercel.app",
    code: "https://github.com/tdogcodes/Layers-Landing-Page",
    images: [
      {
        id: 1,
        imageSrc: LayersLanding,
      },
      {
        id: 2,
        imageSrc: LayersFeat,
      },
      {
        id: 3,
        imageSrc: LayersInt,
      },
      {
        id: 4,
        imageSrc: LayersFaq,
      },
      {
        id: 5,
        imageSrc: LayersText,
      },
    ],
  },
  {
    company: "Akasha Terminal",
    year: "2024",
    title: "Realtime Chat App for Genshin Impact",
    results: [
      {
        title:
          "Created a full-stack real-time chat app with React and Firebase, allowing users to log in, connect, and chat securely.",
      },
      {
        title:
          "Manages user data with Zustand and stores it in Firestore, uses Firebase Auth, and styled with CSS",
      },
    ],
    link: "https://akasha-terminal.vercel.app",
    code: "https://github.com/tdogcodes/Genshin-Impact-Messenging",
    images: [
      {
        id: 2,
        imageSrc: AkashaPage,
      },
    ],
  },
  {
    company: "Prescripto",
    year: "2025",
    title: "Healthcare Platform for Doctors and Patients",
    results: [
      {
        title:
          "Developed a responsive React frontend for a healthcare platform,patients can schedule and manage appointments",
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
        id: 3,
        imageSrc: Prescripto,
      },
    ],
  },
];

export const ProjectsSection = () => {
  function useRefsInView(count: number) {
    const refs = useRef<Array<React.RefObject<HTMLDivElement>>>([]);

    if (refs.current.length !== count) {
      refs.current = Array.from({ length: count }, () =>
        React.createRef<HTMLDivElement>()
      );
    }

    const inViews = [
      useInView(refs.current[0], { once: true }),
      useInView(refs.current[1], { once: true }),
      useInView(refs.current[2], { once: true }),
      useInView(refs.current[3], { once: true }),
    ];

    return [refs.current, inViews] as const;
  }

  const loadMoreRef = useRef<HTMLDivElement>(null);
  const loadMoreInView = useInView(loadMoreRef, { once: true });

  const [refs, inViews] = useRefsInView(4);

  return (
    <section id="projects" className="pb-16 lg:py-24 pt-16">
      <div className="flex flex-col sm:mx-10 md:mx-36 lg:mx-24">
        <SectionHeader title="Personal Projects" eyebrow="" description="" />
        <div className="flex flex-col lg:flex-row gap-5 lg:justify-center lg:flex-wrap overflow-hidden">
          {portfolioProjects.map((project, i) => (
            <motion.div
              ref={refs[i]}
              initial={{ opacity: 0, y: 50 }}
              animate={inViews[i] ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              key={project.title}
              className="z-0 overflow-hidden lg:w-[600px] after:z-10 mt-12 flex flex-col align-center
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
              <h3 className="font-serif text-2xl mt-2 md:text-4xl">
                {project.title}
              </h3>
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
                    target={"_blank" + "_self"}
                    rel={"noopener noreferrer" + undefined}
                  >
                    <button
                      className=" h-12 md:w-auto rounded-xl lg:mt-3 pretty-btn
                    z-20 md:px-4 font-semibold inline-flex items-center px-2 justify-around gap-2 m-auto mt-8"
                    >
                      <span className="sm:text-sm md:text-base">
                        Visit Site
                      </span>
                      <ArrowUpRight className="md:size-5 md:block hidden" />
                    </button>
                  </a>
                  <a
                    href={project.code}
                    className="w-full z-20 md:w-auto sm:w-auto"
                    target={"_blank" + "_self"}
                    rel={"noopener noreferrer" + undefined}
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
                  images={project.images.map((image) => ({
                    ...image,
                    imageSrc: image.imageSrc.src,
                  }))}
                />
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          ref={loadMoreRef}
          initial={{ opacity: 0, y: 50 }}
          animate={loadMoreInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="flex justify-center mt-10"
        >
          <LoadMore outerStyle=" w-[20%]" />
        </motion.div>
      </div>
    </section>
  );
};
