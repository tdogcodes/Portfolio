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
import Zustand from '@/assets/icons/zustand.svg'
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import me from "@/assets/images/me.webp";
import { CardHeader } from "@/components/CardHeader";

const toolboxItems = [{
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
}
];

const hobbies = [
  {
    title: "Reading",
    emoji: "📚",
  },
  {
    title: "Petting my cat",
    emoji: "🐈",
  },
  {
    title: "Genshin Impact",
    emoji: "✨",
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
  return (
  <div id="about" className="py-20 -mb-20">
    <div className="container">
    <SectionHeader title="A Glimpse Into My World" eyebrow="learn more about me" description=""/>
    <div className="mt-20 flex flex-col gap-8">
      <div className="md:grid md:grid-cols-5 md:gap-8"> 
          <Card className=" md:col-span-2 sm:mb-8 md:mb-0">
          <CardHeader title="My School" description="Bachelor of Science in Computer Science"/>
              <div className="w-40 mx-auto mt-8"><Image src={wguLogo} alt="Book Cover" className="duration-300 rounded-full transition-shadow hover:hover:shadow-[5px_5px_rgba(0,98,90,0.4),10px_10px_rgba(0,98,90,0.3),15px_15px_rgba(0,98,90,0.2),20px_20px_rgba(0,98,90,0.1),25px_25px_rgba(0,98,90,0.05)]" width={300} height={300}/></div>  
          </Card>
        <Card className="md:col-span-3 ">
          <CardHeader title="My Toolbox" description="The tools I use to build web applications"/>
          <div className="mt-5 flex flex-col items-center">
            <div className="">
              {toolboxItems.map(item => {
                return (
                  <div key={item.title} className="inline-flex items-center gap-4 py-2 px-3 hover:outline-emerald-300 hover:scale-95 transition-all duration-300 outline outline-2 outline-white/10 rounded-lg m-1 -translate-x">
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
          <CardHeader title="My Hobbies" description="things I like besides web development"/>
          <div>
            <div>
              {hobbies.map(hobby => (
                  <div key={hobby.title} className="inline-flex mx-.5 hover:animate-pulse hover:rotate-12 transition-all duration-700 gap-2 px-6 bg-gradient-to-r m-0.5 from-emerald-300 to-sky-400 rounded-full py-1.5">
                    <span className="font-medium text-gray-950">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </div>
                )
              )}  
            </div>
          </div>      
      </Card>
      <Card className="h-[320px] p-0 relative ">       
            <Image src={mapImage} alt="Map" className="w-full h-full object-cover"/>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center size-24 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400">
              <Image src={me} alt="Me" className="size-20 rounded-full object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
            </div>
            <span className="text-black bottom-20 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-semibold absolute ">Hemet, CA</span>
      </Card>
      </div>
      <hr className="border-t-2 border-white/10 mt-14 mx-3"/>
    </div>
  </div>)
};
