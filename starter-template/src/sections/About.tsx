import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/javascript.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import TailwindIcon from "@/assets/icons/tailwind.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GitIcon from "@/assets/icons/git.svg";
import TypescriptIcon from "@/assets/icons/typescript.svg";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";

const toolboxItems = [{
  title: "Javascript",
  iconType: JavascriptIcon,
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
  title: "Tailwind",
  iconType: TailwindIcon,
},
{
  title: "Typescript",
  iconType: TypescriptIcon,
},
];

const hobbies = [
  {
    title: "Scupting",
    emoji: "🏺",
  },
  {
    title: "Fencing",
    emoji: "🤺",
  },
  {
    title: "Playing with my cat",
    emoji: "🐈",
  },
  {
    title: "Gaming",
    emoji: "🖥️",
  },
  {
    title: "Anime",
    emoji: "📺",
  },
  {
    title: "Reading",
    emoji: "📘",
  },
];

export const AboutSection = () => {
  return (
  <div id="about" className="py-20 -mb-20">
    <div className="container">
    <SectionHeader title="A Glimpse Into My World" eyebrow="learn a little bit about myself" description="Some fun facts about me"/>
    <div className="mt-20 flex flex-col gap-8">
      <div className="md:grid md:grid-cols-5 md:gap-8"> 
          <Card className=" md:col-span-2 sm:mb-8 md:mb-0">
          <CardHeader title="My Reads" description="See the books the shape my perspective"/>
              <div className="w-40 mx-auto mt-8"><Image src={bookImage} alt="Book Cover" width={300} height={300}/></div>  
          </Card>
        <Card className="md:col-span-3 ">
          <CardHeader title="My Toolbox" description="The tools I use to build web applications"/>
          <div className="mt-5 flex flex-col items-center">
            <div className="">
              {toolboxItems.map(item => {
                return (
                  <div key={item.title} className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg m-1 -translate-x">
                    <TechIcon component={item.iconType}/>
                    <span className="font-semibold">{item.title}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </Card>
      </div>
      <Card className="gap-4">
          <CardHeader title="My Hobbies" description="things I like besides development"/>
          <div>
            <div>
              {hobbies.map(hobby => (
                  <div key={hobby.title} className="inline-flex mx-.5  gap-2 px-6 bg-gradient-to-r m-0.5 from-emerald-300 to-sky-400 rounded-full py-1.5">
                    <span className="font-medium text-gray-950">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </div>
                )
              )}  
            </div>
          </div>      
      </Card>
      <Card className="h-[320px] p-0 relative">       
            <Image src={mapImage} alt="Map" className="w-full h-full object-cover"/>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400">
              <Image src={smileMemoji} alt="Smile Memoji" className="size-20"/>
            </div>
      </Card>
      </div>
      <hr className="border-t-2 border-white/10 mt-14 mx-3"/>
    </div>
  </div>)
};
