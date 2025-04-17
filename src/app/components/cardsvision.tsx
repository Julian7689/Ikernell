"use client";

type CardProps = {
    title: string;
    description: string;
    link?: string;
};

const Card = ({ title, description, link }: CardProps) => {
    return (
        <div className="w-72 bg-gradient-to-br from-[var(--primary)] to-[var(--tertiary)] text-[var(--secondary)] border border-[var(--primary)] grid grid-cols-2 justify-center p-6 gap-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="col-span-2 text-xl font-bold capitalize mb-2">
                {title}
            </div>
            <div className="col-span-2 text-base leading-relaxed">
                {description}
            </div>
            <div className="col-span-2 flex justify-end">
                <button 
                    onClick={() => link && window.open(link, '_blank')}
                    className="rounded-lg bg-[var(--secondary)] text-white hover:bg-[var(--primary)] hover:text-[var(--secondary)] duration-300 p-3 flex items-center gap-2"
                >
                    <span>Ver más</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1={10} y1={14} x2={21} y2={3} />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Card;