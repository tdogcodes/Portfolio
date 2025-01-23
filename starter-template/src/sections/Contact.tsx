import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
  <div className="py-16 pt-14">
    <div className="container">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 p-8 rounded-3xl text-center text-gray-900 px-10 relative overflow-hidden z-0">
        <div className="absolute inset-0 opacity-10 -z-10" style={{
          backgroundImage: `url(${grainImage.src})`
        }}>
        </div>
        <h2 className="font-serif text-2xl">Lets get in touch</h2>
        <p className="text-sm mt-2">Ready to bring your next project to life? Let's make it happen!</p>
        <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-5
         hover:bg-white hover:text-gray-900 transition duration-500 border border-white/15">
          <span className="font-semibold ">
            Contact Me
          </span>
          <ArrowUpRight className="size-4"/>
          </button>
      </div>
    </div>
  </div>
  )
};
