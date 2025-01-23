import grainImage from '@/assets/images/grain.jpg';
import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export const Card = ({ className, children }:PropsWithChildren<{ className ?: string; }>) => {
    return(
        <div className={twMerge(
            "z-0 overflow-hidden after:z-10 flex flex-col align-center bg-gray-800 rounded-3xl relative",
            "after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2",
            "after:rounded-3xl after:outline-white/20 after:pointer-events-none p-6",
            className)}> 
            <div className="absolute inset-0 opacity-5 -z-10" style={{ backgroundImage: `url(${grainImage.src})`}}></div> 
            {children}
        </div>
    )
}