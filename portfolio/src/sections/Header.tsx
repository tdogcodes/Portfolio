
export const Header = () => {



  return <div className="flex justify-center items-center fixed top-8 w-full z-10">
    <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
      <a href="#home"  className="nav-item hover:cursor-pointer sm:text-md lg:text-lg">Home</a>
      <a href="#projects" className="nav-item sm:text-md lg:text-lg">Projects</a>
      <a href="#about" className="nav-item sm:text-md lg:text-lg">About</a>
      <a href="#contact" className="nav-item sm:text-sm lg:text-lg">Contact</a>
    </nav>
  </div>;
};
