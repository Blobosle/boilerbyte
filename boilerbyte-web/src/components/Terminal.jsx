export default function Terminal() {
    return (
        <div className="w-full h-220">
            {/* Title */}
            <h2 className="pt-10 pl-25 text-default text-[15px] font-firamonoregular">$ man boilerbyte</h2>

            {/* Terminal window */}
            <div className="pt-5 flex justify-center">
                <div className="w-7/8 h-180 lg:h-155 xl:h-180 border-1 border-default text-nowrap">
                    {/* Terminal menu bar */}
                    <div className="grid grid-cols-3 items-center bg-black w-full h-7 border-b-1 border-default">
                        <div className="flex justify-start pl-2 gap-2">
                            <div className="bg-barred h-3 w-3 rounded-[1em]" />
                            <div className="bg-baryellow h-3 w-3 rounded-[1em]" />
                            <div className="bg-bargreen h-3 w-3 rounded-[1em]" />
                        </div>

                        <h2 className="select-none text-default text-[15px] text-center text-nowrap font-interregular">
                            terminal ~zsh &lt; man boilerbyte
                        </h2>
                    </div>

                    {/* Man page title */}
                    <div className="pl-10 pr-10 pt-5 flex justify-between items-center tracking-[0.02em] text-default font-interbold text-[10px] md:text-[20px] lg:text-[25px]">
                        <h2>BOILERBYTE(3)</h2>
                        <h2>Linux Programmer’s Manual</h2>
                        <h2>BOILERBYTE(3)</h2>
                    </div>


                    {/* Man page elements */}
                    <div className="flex flex-col items-center pt-5">
                        <h3 className="pr-65 lg:pr-135 xl:pr-140 font-intermedium text-[14px] lg:text-[18px] xl:text-[22px] text-default tracking-[0.02em]">NAME</h3>
                        <p className="pr-3 lg:pr-42 xl:pr-43 font-interlight text-[14px] lg:text-[18px] xl:text-[20px] text-default tracking-[0.02em]">boilerbyte – purdue cs resource hub</p>
                    </div>

                    <div className="flex flex-col items-center pt-10 lg:pt-5">
                        <h3 className="pr-57 -mt-3 lg:pr-126 xl:pr-128 font-intermedium text-[14px] lg:text-[18px] xl:text-[22px] text-default tracking-[0.02em]">SYNOPSIS</h3>
                        <p className="pr-32 lg:pr-65 xl:pr-68 font-firamonoregular font-thin text-[10px] lg:text-[18px] xl:text-[20px] text-default">#include &lt;purdue.h&gt;</p>
                        <p className="pl-15 lg:pl-23 xl:pl-30 font-firamonoregular font-thin text-[10px] lg:text-[18px] xl:text-[20px] text-default">
                            char *boilerbyte(char *class, const char *request);
                        </p>
                    </div>
                    <div className="flex flex-col items-center pt-10 lg:pt-5">
                        <h3 className="-mt-3 pr-0 lg:pr-119 font-intermedium text-[14px] lg:text-[18px] xl:text-[22px] text-default tracking-[0.02em]">DESCRIPTION</h3>
                        <p className="hidden lg:block lg:pl-27 xl:pl-53 pt-1 font-interlight text-[11px] lg:text-[18px] xl:text-[22px] text-default tracking-[0.02em]">
                            This site compiles all available resources and guides related to Purdue<br/>CS courses. As we build the site the number of resources, features, and<br/>courses covered will increase.<br/><br/>

                            The site is not monetized, nor is actively maintained, as such please<br/>contact us if you want to contribute with your own resources that you<br/>used for the course. Any help would be greatly appreciated!<br/><br/>

                            If you want to promote a Purdue CS relevant educational tool/class/<br/>club/resource on the website, please send it to us. If it passes our<br/>vetting, we will add it for free.
                        </p>

                        <div className="flex justify-center">
                            <p className="pl-3 w-full pt-1 font-interlight text-[18px] text-left lg:hidden text-default tracking-[0.02em]">
                                This site compiles all available resources and<br/>guides related to Purdue CS courses. As we<br/>build the site the number of resources,<br/>features, and courses covered will increase.<br/><br/>

                                The site is not monetized, nor is actively<br/>maintained, as such please contact us if you<br/>want to contribute with your own resources<br/>that you used for the course. Any help would<br/>be greatly appreciated!<br/><br/>

                                If you want to promote a Purdue CS relevant<br/>educational tool/class/club/resource on the<br/>website, please send it to us. If it passes our<br/>vetting, we will add it for free.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
