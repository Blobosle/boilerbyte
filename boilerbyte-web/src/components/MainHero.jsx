export default function MainHero() {
    return (
        <div className="pl-25 w-full h-200">
            <h2 className="pt-25 text-default font-firamonoregular leading-none">$ ssh user@boilerbyte.com</h2>
            <h1 className="pt-4 text-default font-interextrabold text-[120px] leading-none">boilerbyte</h1>
            <h2 className="pt-4 pb-8 text-default font-firamonoregular text-[25px] leading-none">your goto resources hub for purdue cs.</h2>

            <div className="w-200 h-60 border-1 border-default">
                <h2 className="pl-5 pt-9 font-firamonobold leading-none text-[20px] text-default">
                    $&nbsp;&nbsp;&nbsp; cat announcement.txt
                </h2>
                <p className="pl-20 pt-5 pr-10 font-firamonoregular text-[20px] text-default">
                    Purdue’s pace is intense, but CS turns it up to max. We’re your shortcut to sanity, transforming overload into light work by providing you directly the resources you need to perform in these courses.
                </p>
            </div>

            <div className="pt-10 flex justify-start gap-10">
                <a href="" className="flex w-55 h-25 bg-default items-center justify-center">
                    <p className="text-[20px] font-firamonoregular">./init</p>
                </a>
                <a className="flex w-55 h-25 border-1 border-default items-center justify-center">
                    <p className="text-[20px] text-default font-firamonoregular">man boilerbyte</p>
                </a>
            </div>
        </div>
    );
}
