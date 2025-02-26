'use client'
import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";
import { motion } from "framer-motion"

const words= ["performant","accessible", "scaleable", "user friendly",
"interactive", "responsive", "search optimized","reuseable", "maintainable",
 "secure", "best practices","modern tools"]

export const TapeSection = () => {
  return (
  <div className="py-16 lg:py-24 overflow-x-clip">
   <div className="bg-gradient-to-r from-emerald-200 to-sky-400  -rotate-3 -mx-1">
      <div className="flex" style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}> 
          <motion.div initial={{x: '-50%'}} animate={{x: 0}} transition={{duration: 15, ease: "linear", repeat: Infinity}} className="flex flex-none gap-4 py-3">
          {Array.from({ length: 2 }).map((_,i)=> (
              <Fragment key={i}>
                {words.map(word=>
                  (
                    <div key={word} className="inline-flex gap-4 items-center">
                      <span className="text-gray-900 uppercase font-extrabold text-sm">{word}</span>
                      <StarIcon className="size-6 text-gray-900 -rotate-12" />
                    </div>
                  ))}
              </Fragment>
            ))}
          </motion.div>
      </div>
    </div>
  </div>
)};
