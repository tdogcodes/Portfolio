export const SectionHeader = ({
    title,
    eyebrow,
    description,
    titleStyle,
}: {title: string;
    eyebrow: string;
    description: string;
    titleStyle?: string;
}) => {
    return (<>
    <div className="flex justify-center">
        <p className={`font-semibold text-3xl md:text-5xl text-center uppercase tracking-widest 
        bg-gradient-to-r from-emerald-200 to-sky-400 text-transparent bg-clip-text ${titleStyle}`}>{title}</p>
    </div>
    <h2 className="font-serif text-3xl md:text-4xl text-center mt-6">{eyebrow}</h2>
    <p className="mt-4 text-center text-white/60 md:text-2xl lg:text-3xl">{description}</p>
    </>);
};