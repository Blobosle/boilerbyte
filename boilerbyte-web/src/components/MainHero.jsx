export default function MainHero() {
    const git = "/icons/git.png";
    const arch = "/icons/aarch64.png";
    const linux = "/icons/linux.png";
    const c_plus_plus = "/icons/c-plus-plus.png";
    const java = "/icons/java.png";
    const c = "/icons/c.png";

    return (
        <div className="lg:grid lg:grid-cols-2 pl-10 sm:pl-25 w-full h-230">
            <div>
                <h2 className="pt-25 text-default font-firamonoregular leading-none">$ ssh user@boilerbyte.com</h2>
                <h1 className="pt-4 text-default font-interextrabold text-[60px] sm:text-[80px] md:text-[120px] leading-none">boilerbyte</h1>
                <h2 className="pt-4 pb-8 text-default font-firamonoregular text-[15px] sm:text-[25px] leading-none">your goto resource hub for purdue cs.</h2>

                <div className="w-90 h-90 sm:w-120 sm:h-80 lg:w-200 lg:h-60 border-1 border-default">
                    <h2 className="pl-5 pt-7 sm:pt-12 md:pt-9 font-firamonobold leading-none text-[18px] lg:text-[20px] text-default">
                        $&nbsp;&nbsp;&nbsp; cat announcement.txt
                    </h2>
                    <p className="pl-20 pt-5 pr-10 font-firamonoregular text-[18px] lg:text-[20px] text-default">
                        Purdue’s pace is intense, but CS turns it up to max. We’re your shortcut to sanity, transforming overload into light work by providing you directly the resources you need to perform in these courses.
                    </p>
                </div>

                <div className="pt-10 flex justify-start gap-10 sm:pr-0 pr-12">
                    <a href="/courses/" className="hover:underline flex w-55 h-25 bg-default items-center justify-center">
                        <p className="text-[20px] text-center font-firamonoregular">./init</p>
                    </a>
                    <a href="/man/" className="hover:underline text-default flex w-55 h-25 border-1 border-default items-center justify-center">
                        <p className="text-[20px] text-default text-center font-firamonoregular">man boilerbyte</p>
                    </a>
                </div>
            </div>

            <div className="hidden lg:block relative select-none ">
                <img src={git} className="absolute top-5 right-30 w-50 h-auto" />
                <img src={c_plus_plus} className="absolute top-20 right-80 w-70 h-auto" />
                <img src={linux} className="absolute top-50 right-0 w-60 h-auto" />
                <img src={java} className="absolute top-60 right-50 w-80 h-auto" />
                <img src={c} className="absolute bottom-5 right-10 w-75 h-auto" />
                <img src={arch} className="absolute bottom-0 right-90 w-60 h-auto" />
            </div>
        </div>
    );
}
