import React, { ReactNode } from "react";
import "./Keycap.css"; // Custom styles for pseudo-elements

const Keycap = ({ label }: { label: ReactNode }) => {
  return (
    <article className="keycap relative inline-block mx-1 size-16 lg:size-20 rounded-[10px] bg-gradient-to-b from-[#282828] to-[#202020] shadow-keycap transition-transform duration-100 ease-in-out select-none">
      <aside className="letter absolute left-4 top-[20%] text-[#e9e9e9] text-sm transition-transform duration-100 ease-in-out">
        {label}
      </aside>
    </article>
  );
};

export default Keycap;
