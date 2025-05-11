"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import wguLogo from "@/assets/images/wguLogo.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/javascript.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import TailwindIcon from "@/assets/icons/tailwind.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GitIcon from "@/assets/icons/git.svg";
import TypescriptIcon from "@/assets/icons/typescript.svg";
import NextjsIcon from "@/assets/icons/next.svg";
import Zustand from "@/assets/icons/zustand.svg";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import me from "@/assets/images/me.webp";
import { CardHeader } from "@/components/CardHeader";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import React from "react";

const toolboxItems = [
  {
    title: "Javascript",
    iconType: JavascriptIcon,
  },
  {
    title: "Typescript",
    iconType: TypescriptIcon,
  },
  {
    title: "HTML5",
    iconType: HtmlIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "Git",
    iconType: GitIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Next.js",
    iconType: NextjsIcon,
  },
  {
    title: "Tailwind",
    iconType: TailwindIcon,
  },
  {
    title: "Zustand",
    iconType: Zustand,
  },
];

const hobbies = [
  {
    title: "Reading",
    emoji: "📚",
  },
  {
    title: "Playing with my cat",
    emoji: "🐈",
  },
  {
    title: "Gardening",
    emoji: "🌱",
  },
  {
    title: "Anime",
    emoji: "😎",
  },
  {
    title: "Learning new tech",
    emoji: "🤖",
  },
];

export const AboutSection = () => {
  function useMultiInView(count: number) {
    const refs = useRef<React.RefObject<HTMLDivElement>[]>([]);
  
    // Only initialize refs on first render
    if (refs.current.length !== count) {
      refs.current = Array.from({ length: count }, () => React.createRef<HTMLDivElement>());
    }
  
    const inViews = refs.current.map((ref) => useInView(ref, { once: true }));
  
    return [refs.current, inViews] as const;
  }
  
  const [refs, inViews] = useMultiInView(4);

  return (
    <div id="about" className="py-20 -mb-20">
      <div className="container">
        <SectionHeader
          title="A Glimpse Into My World"
          eyebrow="learn more about me"
          description=""
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="md:grid md:grid-cols-5 md:gap-8">
            <motion.div
              ref={refs[0]}
              initial={{ opacity: 0, y: 50 }}
              animate={inViews[0] ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className="mb-8 md:mb-0 md:col-span-2"
            >
              <Card className="md:mt-8 lg:mt-0 md:pb-16 lg:pb-10">
                <CardHeader
                  title="My School"
                  description="Bachelor of Science in Computer Science"
                />
                <div className="w-40 mx-auto mt-8">
                  <Image
                    src={wguLogo}
                    alt="School Logo"
                    className="duration-300 rounded-full transition-shadow hover:hover:shadow-[5px_5px_rgba(0,98,90,0.4),10px_10px_rgba(0,98,90,0.3),15px_15px_rgba(0,98,90,0.2),20px_20px_rgba(0,98,90,0.1),25px_25px_rgba(0,98,90,0.05)]"
                    width={300}
                    height={300}
                  />
                </div>
              </Card>
            </motion.div>
            <motion.div
              ref={refs[1]}
              initial={{ opacity: 0, y: 50 }}
              animate={inViews[1] ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className="md:col-span-3 "
            >
              <Card>
                <CardHeader
                  title="My Toolbox"
                  description="The tools I use to build web applications"
                />
                <div className="mt-5 flex flex-col items-center">
                  <div className="">
                    {toolboxItems.map((item) => {
                      return (
                        <div
                          key={item.title}
                          className="inline-flex items-center gap-4 py-2 px-3 hover:outline-emerald-300 hover:scale-95 transition-all duration-300 outline outline-2 outline-white/10 rounded-lg m-1 -translate-x"
                        >
                          <TechIcon component={item.iconType} />
                          <span className="font-semibold">{item.title}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
          <motion.div
            ref={refs[2]}
            initial={{ opacity: 0, y: 50 }}
            animate={inViews[2] ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <Card className="gap-4">
              <CardHeader
                title="My Hobbies"
                description="things I like besides web development"
              />
              <div>
                <div>
                  {hobbies.map((hobby) => (
                    <div
                      key={hobby.title}
                      className="inline-flex mx-.5  hover:scale-95 transition-all duration-300 gap-2 px-6 bg-gradient-to-r m-0.5 from-emerald-300 to-sky-400 rounded-full py-1.5"
                    >
                      <span className="font-medium text-gray-950">
                        {hobby.title}
                      </span>
                      <span>{hobby.emoji}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
          <motion.div
            ref={refs[3]}
            initial={{ opacity: 0, y: 50 }}
            animate={inViews[3] ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <Card className="h-[320px] p-0 relative ">
              <Image
                src={mapImage}
                alt="Map"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center size-24 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400">
                <Image
                  src={me}
                  alt="Me"
                  className="size-20 rounded-full object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
              <span className="text-black bottom-20 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-semibold absolute ">
                Hemet, CA
              </span>
            </Card>
          </motion.div>
        </div>
        <hr className="border-t-2 border-white/10 mt-14 mx-3" />
      </div>
    </div>
  );
};
