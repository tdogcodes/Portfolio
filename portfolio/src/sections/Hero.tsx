import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {
  return ( 
  <div id="home" className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
    <div className="absolute inset-0" style={{
  maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)"
}}>
      <div className="absolute inset-0 -z-30 opacity-5" style={{
        backgroundImage: `url(${grainImage.src})`,
      }}></div>
      <div className="size-[620px] hero-ring"></div>
      <div className="size-[820px] hero-ring"></div>
      <div className="size-[1020px] hero-ring"></div>
      <div className="size-[1220px] hero-ring"></div>
      <HeroOrbit size={800} rotation={282} shouldOrbit={true} shouldSpin={true} orbitDuration="60s" spinDuration="20s">
            <StarIcon className="size-28 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={850} rotation={180} shouldOrbit={true} shouldSpin={true} orbitDuration="60s" spinDuration="20s">
            <StarIcon className="size-16 text-blue-300/70" />
      </HeroOrbit>
      <HeroOrbit size={550} rotation={250} shouldOrbit={true} shouldSpin={true} orbitDuration="60s" spinDuration="20s">
            <StarIcon className="size-16 text-blue-300/70" />
      </HeroOrbit>
      <HeroOrbit size={550} rotation={30} shouldOrbit={true} shouldSpin={true} orbitDuration="60s" spinDuration="20s">
            <StarIcon className="size-16 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={890} rotation={-212} shouldOrbit={true} shouldSpin={true} orbitDuration="60s" spinDuration="20s">
            <StarIcon className="size-28 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={660} rotation={90} shouldOrbit={true} shouldSpin={true} orbitDuration="60s" spinDuration="20s">
            <StarIcon className="size-12 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={830} rotation={0} shouldOrbit={true} shouldSpin={true} orbitDuration="60s" spinDuration="20s">
            <StarIcon className="size-28 text-blue-300/70" />
      </HeroOrbit>
      <HeroOrbit size={580} rotation={-10} shouldOrbit={true} shouldSpin={true} orbitDuration="60s" spinDuration="20s">
            <StarIcon className="size-8 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={850} rotation={-40} shouldOrbit={true} shouldSpin={true} orbitDuration="60s" spinDuration="20s">
            <StarIcon className="size-16 text-blue-300/70" />
      </HeroOrbit>
      <HeroOrbit size={750} rotation={260} shouldOrbit={true} shouldSpin={true} orbitDuration="60s" spinDuration="20s">
            <StarIcon className="size-16 text-blue-300/70" />
      </HeroOrbit>
      <HeroOrbit size={900} rotation={400} shouldOrbit={true} shouldSpin={true} orbitDuration="60s" spinDuration="20s">
            <StarIcon className="size-16 text-blue-300/70" />
      </HeroOrbit>
      <HeroOrbit size={860} rotation={305} shouldOrbit={true} shouldSpin={true} orbitDuration="60s" spinDuration="20s">
            <StarIcon className="size-8 text-emerald-300/40" />
      </HeroOrbit>
      <HeroOrbit size={860} rotation={30} shouldOrbit={true} shouldSpin={true} orbitDuration="60s" spinDuration="20s">
            <StarIcon className="size-8 text-emerald-300/40" />
      </HeroOrbit>
      <HeroOrbit size={710} rotation={70} shouldOrbit={true} shouldSpin={true} orbitDuration="60s" spinDuration="20s">
            <SparkleIcon className="size-8 text-blue-300/40" />
      </HeroOrbit>
      <HeroOrbit size={540} rotation={160} shouldOrbit={true} shouldSpin={true} orbitDuration="60s" spinDuration="20s">
            <SparkleIcon className="size-8 text-blue-300/40" />
      </HeroOrbit>
      <HeroOrbit size={730} rotation={-20} shouldOrbit={true} shouldSpin={true} orbitDuration="60s" spinDuration="20s">
            <SparkleIcon className="size-8 text-blue-300/40" />
      </HeroOrbit>
      <HeroOrbit size={580} rotation={-170} shouldOrbit={true} shouldSpin={true} orbitDuration="60s" spinDuration="20s">
            <SparkleIcon className="size-16 text-emerald-300/40" />
      </HeroOrbit>
      <HeroOrbit size={580} rotation={110} shouldOrbit={true} shouldSpin={true} orbitDuration="60s" spinDuration="20s"> 
            <SparkleIcon className="size-16 text-emerald-300/40" />
      </HeroOrbit>
      <HeroOrbit size={840} rotation={125} shouldOrbit={true} shouldSpin={true} orbitDuration="60s" spinDuration="20s">
            <SparkleIcon className="size-14 text-blue-300/60" />
      </HeroOrbit>
      <HeroOrbit size={703} rotation={-140} shouldOrbit={true} orbitDuration="60s">
            <div className="size-3 rounded-full bg-blue-300/60"></div>
      </HeroOrbit>
      <HeroOrbit size={800} rotation={20} shouldOrbit={true} orbitDuration="60s">
            <div className="size-3 rounded-full bg-emerald-300/50"></div>
      </HeroOrbit>
      <HeroOrbit size={733} rotation={300} shouldOrbit={true} orbitDuration="60s">
            <div className="size-3 rounded-full bg-emerald-300"></div>
      </HeroOrbit>
      <HeroOrbit size={792} rotation={-195} shouldOrbit={true} orbitDuration="60s">
            <div className="size-3 rounded-full bg-blue-300/60"></div>
      </HeroOrbit>
    </div>
    <div className="container">
      <div className="flex flex-col items-center">
        <div className="bg-gray-950 border border-gray-950 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
          <div className="bg-green-500 size-2.5 rounded-full relative"></div>
          <div className="bg-green-500 size-2.5 rounded-full absolute animate-ping"></div>
          <div className="text-sm font-medium">Available for new projects</div>
        </div>
      </div>
      <div className="max-w-lg mx-auto">
        <h1 className="font-serif text-3xl md:text-5xl text-center mt-6 tracking-wide">Tracy Sandoval</h1>
        <p className="mt-4 text-center text-white/60 md:text-lg">
          I&apos;m a Frontend Developer from Hemet, CA. <br/> Specializing in responsive React applications.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
        <button className="inline-flex items-center gap-2 pretty-btn h-12 z-10">
          <span>View Projects</span>
          <ArrowDown className="size-4"/>
        </button>
        <button className="inline-flex items-center gap-2 pretty-btn h-12 z-10">
          <span>🤝</span>
          <span className="font-semibold">Lets Connect</span>
        </button>
      </div>
    </div>
  </div>
  );
};
