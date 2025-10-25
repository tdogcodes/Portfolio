"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import wguLogo from "@/assets/images/wguLogo.png";
import Image from "next/image";
import TailwindIcon from "@/assets/icons/tailwind.svg";
import ReactIcon from "@/assets/icons/react.svg";
import TypescriptIcon from "@/assets/icons/typescript.svg";
import NextjsIcon from "@/assets/icons/next.svg";
import Postgres from "@/assets/icons/postgresql.svg";
import Prisma from "@/assets/icons/prisma.svg";
import Tanstack from "@/assets/icons/tanstack.svg";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import me from "@/assets/images/me.webp";
import { CardHeader } from "@/components/CardHeader";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Keycap from "@/components/keycap/Keycap";

const toolboxItems = [
  {
    title: "Typescript",
    iconType: TypescriptIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Tailwind",
    iconType: TailwindIcon,
  },
  {
    title: "TanStack",
    iconType: Tanstack,
  },
  {
    title: "Next.js",
    iconType: NextjsIcon,
  },
  {
    title: "Prisma",
    iconType: Prisma,
  },
  {
    title: "PostgreSQL",
    iconType: Postgres,
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
    title: "Counter strike",
    emoji: "🔫",
  },
];

export const AboutSection = () => {
  const ref0 = useRef(null);
  const ref1 = useRef(null);
  const ref3 = useRef(null);

  const isInView0 = useInView(ref0, { once: true });
  const isInView1 = useInView(ref1, { once: true });
  const isInView3 = useInView(ref3, { once: true });

  return (
    <div id="about" className="py-20 -mb-20">
      <div className="container">
        <SectionHeader title="About" eyebrow="" description="" />
        <div className="mt-20 flex flex-col gap-8">
          <div className="flex- items-center md:grid md:grid-cols-5 md:gap-8">
            <motion.div
              ref={ref0}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView0 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className="mb-8 md:mb-0 md:col-span-2"
            >
              <Card className="lg:mt-0 md:pb-16 lg:pb-10">
                <CardHeader
                  title="My School"
                  description="Bachelors of Computer Science"
                />
                <div className="mx-auto pt-4">
                  <Image
                    src={wguLogo}
                    alt="School Logo"
                    className="w-[120px] md:w-[160px] duration-300 rounded-full transition-shadow hover:shadow-[5px_5px_rgba(0,98,90,0.4),10px_10px_rgba(0,98,90,0.3),15px_15px_rgba(0,98,90,0.2),20px_20px_rgba(0,98,90,0.1),25px_25px_rgba(0,98,90,0.05)]"
                  />
                </div>
              </Card>
            </motion.div>
            <motion.div
              ref={ref1}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className="md:col-span-3 "
            >
              <Card>
                <CardHeader
                  title="My Favorite Tools"
                  description="Technologies I use regularly"
                />
                <div className="mt-5 flex flex-col items-center justify-center">
                  <div className="flex flex-wrap justify-center gap-2">
                    {toolboxItems.map((item) => {
                      return (
                        <Keycap
                          key={item.title}
                          label={<TechIcon component={item.iconType} />}
                        />
                      );
                    })}
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
          <motion.div
            ref={ref3}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView3 ? { opacity: 1, y: 0 } : {}}
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
