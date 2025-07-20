export default function Cs250() {
    const book = "/books/cs250-book.png";

    return (
        <div className="w-full h-300 leading-none">
            <h2 className="pl-10 md:pl-25 pt-10 text-default font-firamonoregular text-[15px]">$ cat cs250.md</h2>
            <h1 className="pl-10 pb-15 md:pl-25 pt-2 text-default font-interbold text-[30px] md:text-[50px] lg:text-[70px] xl:text-[100px]">
                CS 250: Computer Architecture
            </h1>

            <div className="pb-15 flex justify-center">
                <div className="border-1 border-default w-7/8 h-35">
                    <h2 className="pl-10 pt-8 pb-3 text-default text-[18px] font-firamonomedium">$ cat warning.txt</h2>

                    <p className="pl-10 text-default text-[18px]/[25px] font-firamonoregular">This course’s material heavily depends on the professor. This site caters to the course layed out by <span className="font-firamonobold">Professor George B. Adams III</span>.</p>
                </div>
            </div>

            <div className="pl-30 grid grid-cols-2">
                <div className="pl-30 text-default">
                    <h2 className="font-firamonomedium tracking-[0.02em] text-[20px]">&gt;_ Recommended book</h2>

                    <p className="pt-5 font-firamonoregular font-light text-[20px]/[30px] tracking-[0.02em]">
                        “Computer Organization and Design (ARM<br/>Edition)” by David A. Patterson, and John L. Hennessy.
                    </p>

                    <img src={book} className="pt-5 w-105 h-130"/>
                </div>

                <div className="text-default">
                    <h2 className="pb-7 font-firamonomedium tracking-[0.02em] text-[20px]">&gt;_ Our recommended resources</h2>

                    <a href="https://docs.google.com/document/d/1e8gkwVQpA9wqysyzWQZV9UrJLi0LbJLQMd5TQTpWXPQ/edit?tab=t.0" target="_blank" className="hover:underline font-firamonoregular font-light text-[20px]/[30px]">Final past exam solutions (by Paras Mittal)<br/></a>

                    <a href="https://blobosle.com/purdue/cs250/#" target="_blank" className="hover:underline font-firamonoregular font-light text-[20px]/[30px]">Final exam notes (by B. Lobos)<br/></a>

                    <a href="https://www.cise.ufl.edu/~mssz/CompOrg/CDA-proc.html" target="_blank" className="hover:underline font-firamonoregular font-light text-[20px]/[30px]">Organization of computer systems – processors<br/></a>

                    <a href="https://mariokartwii.com/armv8/" target="_blank" className="hover:underline font-firamonoregular font-light text-[20px]/[30px]">ARMv8 ARMv8 assembly tutorial<br/></a>

                    <a href="https://www.youtube.com/watch?v=rM9BjciBLmg" target="_blank" className="hover:underline font-firamonoregular font-light text-[20px]/[30px]">How transistors remember data (video)<br/></a>

                    <a href="https://www.youtube.com/watch?v=PVNAPWUxZ0g" target="_blank" className="hover:underline font-firamonoregular font-light text-[20px]/[30px]">How the clock works (video)<br/></a>
                </div>
            </div>
        </div>
    );
}
