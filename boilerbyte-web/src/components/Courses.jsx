import React from "react";

export default function Courses() {
    const courses = [
        {
            label: "CS 24000: Programming in C",
            desc: "Taught under professors Jeffrey A. Turkstra & C. K. May",
            ref: "/courses/cs240/",
        },
        {
            label: "CS 25000: Computer Architecture",
            desc: "Taught under professor George B. Adams III",
            ref: "/courses/cs250/",
        },
        {
            label: "CS 25100: Data Structures and Algorithms",
            desc: "Taught under professor Andrés M. Bejarano Posada",
            ref: "/courses/cs251/",
        },
    ];

    const resources = [
        {
            label: "Vim Week: Learning how to use Vim",
            desc: "Taught by Kian D. Kasad",
            ref: "https://www.youtube.com/watch?v=nfRxGE1Tk0M",
        },
        {
            label: "Using Valgrind for debugging your code",
            desc: "Valgrind documentation",
            ref: "https://valgrind.org/docs/manual/quick-start.html",
        },
        {
            label: "0 to LSP: Setting up Neovim from scratch",
            desc: "Video by The Primeagen",
            ref: "https://www.youtube.com/watch?v=w7i4amO_zaE",
        },
    ];

    return (
        <div className="pl-25 w-full h-240 leading-none">
            <h2 className="pt-10 font-firamonoregular text-[15px] text-default">
                $ ls courses/
            </h2>
            <h1 className="pb-2 -mt-3 font-interextrabold text-[80px] text-default">
                courses
            </h1>

            {courses.map(({ label, desc, ref }) => (
                <React.Fragment key={label}>
                    <a href={ref} className="pt-7 pb-4 flex justify-between">
                        <div className="hover:underline text-[25px] tracking-[0.02em] text-default font-intersemibold">
                            {label}
                        </div>

                        <p className="pt-1 pr-24 mb-6 text-[18px] tracking-[0.02em] text-subgray z-10 font-interlight">{desc}</p>

                    </a>

                    <div className="h-px w-14/15 bg-default" />
                </React.Fragment>
            ))}


            <h2 className="pt-10 font-firamonoregular text-[15px] text-default">
                $ ls resources/
            </h2>
            <h1 className="-mt-2 pb-2 font-interextrabold text-[80px] text-default">
                resources
            </h1>

            {resources.map(({ label, desc, ref }) => (
                <React.Fragment key={label}>
                    <a href={ref} target="_blank" className="pt-7 pb-4 flex justify-between">
                        <div className="hover:underline text-[25px] tracking-[0.02em] text-default font-intersemibold">
                            {label}
                        </div>

                        <p className="pt-1 pr-24 mb-6 text-[18px] tracking-[0.02em] text-subgray font-interlight">{desc}</p>

                    </a>

                    <div className="h-px w-14/15 bg-default" />
                </React.Fragment>
            ))}
        </div>
    );
}

